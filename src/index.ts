import {
  Content,
  CustomData,
  EventRequest,
  ServerEvent,
  UserData,
} from "facebook-nodejs-business-sdk";
import type ContentType from "facebook-nodejs-business-sdk/src/objects/serverside/content";
import type UserDataType from "facebook-nodejs-business-sdk/src/objects/serverside/user-data";
import { isNumeric } from "./utils/isNumeric";
import { float2int } from "./utils/float2int";

class FacebookConversionAPI {
  accessToken: string;
  pixelId: string;
  fbp: string | null;
  fbc: string | null;
  externalId: string | null;
  userData: UserDataType & Record<string, any>;
  contents: (ContentType & Record<string, any>)[];
  constentType = "product";
  debug: boolean;
  testEventCode?: string;

  /**
   * Constructor.
   */
  constructor(
    accessToken: string,
    pixelId: string,
    emails: Array<string> | null,
    phones: Array<string> | null,
    clientIpAddress: string,
    clientUserAgent: string,
    fbp: string | null,
    fbc: string | null,
    externalId: string | null,
    testEventCode?: string,
    debug = false,
  ) {
    this.accessToken = accessToken;
    this.pixelId = pixelId;
    this.fbp = fbp;
    this.fbc = fbc;
    this.externalId = externalId;
    this.debug = debug;
    this.testEventCode = testEventCode;
    this.userData = new UserData(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );

    if (clientUserAgent) {
      this.userData.setClientUserAgent(clientUserAgent);
    }

    if (Array.isArray(emails) && emails.length) {
      this.userData.setEmails(emails);
    }

    if (typeof emails === "string" && emails) {
      this.userData.setEmails([emails]);
    }

    if (Array.isArray(phones) && phones.length) {
      this.userData.setPhones(phones);
    }

    if ((typeof phones === "string" || typeof phones === "number") && phones) {
      this.userData.setPhones([phones]);
    }

    if (clientUserAgent) {
      this.userData = this.userData.setClientIpAddress(clientIpAddress);
    }

    if (fbp) {
      this.userData = this.userData.setFbp(fbp);
    }

    if (fbc) {
      this.userData = this.userData.setFbc(fbc);
    }

    if (externalId) {
      this.userData = this.userData.setExternalId(externalId);
    }

    this.contents = [];

    if (this.debug) {
      console.log(`User Data: ${JSON.stringify(this.userData)}\n`);
    }
  }

  /**
   * Add product to contents array.
   */
  addProduct(productId: string, quantity?: number, price?: number) {
    if (!productId) throw new Error("Product ID is required");

    let content = new Content(productId, null, null, null, null, "Knitto", null, null);

    if (isNumeric(quantity)) {
      content = content.setQuantity(float2int(quantity));
    }

    if (isNumeric(price)) {
      content = content.setItemPrice(float2int(price));
    }

    this.contents.push(content);

    if (this.debug) {
      console.log(`Add To Cart: ${JSON.stringify(this.contents)}\n`);
    }

    return this;
  }

  /**
   * Send event to Facebook Conversion API and clear contents array after event is fired.
   */
  async sendEvent(
    eventName: string,
    sourceUrl: string,
    purchaseData?: { value?: number; currency?: string },
    eventData?: { eventId?: string },
  ) {
    const eventRequest = new EventRequest(this.accessToken, this.pixelId).setEvents([
      this.getEventData(eventName, sourceUrl, purchaseData, eventData),
    ]);

    if (this.testEventCode) {
      eventRequest.setTestEventCode(this.testEventCode);
    }

    this.contents = [];

    if (this.debug) {
      console.log(`Event Request: ${JSON.stringify(eventRequest)}\n`);
    }

    return await eventRequest.execute();
  }

  setContentType(contentType: string) {
    this.constentType = contentType;

    return this;
  }

  /**
   * Get event data.
   */
  private getEventData(
    eventName: string,
    sourceUrl: string,
    purchaseData?: { value?: number; currency?: string },
    eventData?: { eventId?: string },
  ): any {
    const currentTimestamp = Math.floor((new Date() as any) / 1000);

    const customData = new CustomData(
      purchaseData?.value,
      purchaseData?.currency,
      null,
      null,
      null,
      this.contents,
      this.constentType,
      null,
      null,
      this.contents?.length || null,
      null,
      null,
      null,
      null,
      null,
    );

    return new ServerEvent(
      eventName,
      currentTimestamp,
      sourceUrl,
      this.userData,
      customData,
      eventData?.eventId,
      null,
      "website",
      null,
      null,
      null,
    );
  }
}

export default FacebookConversionAPI;

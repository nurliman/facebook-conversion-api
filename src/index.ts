import {
  Content,
  CustomData,
  EventRequest,
  ServerEvent,
  UserData,
} from "facebook-nodejs-business-sdk";
import { isNumeric } from "./utils/isNumeric";
import { float2int } from "./utils/float2int";

class FacebookConversionAPI {
  accessToken: string;
  pixelId: string;
  fbp: string | null;
  fbc: string | null;
  userData: UserData;
  contents: Content[];
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
    testEventCode?: string,
    debug = false,
  ) {
    this.accessToken = accessToken;
    this.pixelId = pixelId;
    this.fbp = fbp;
    this.fbc = fbc;
    this.debug = debug;
    this.testEventCode = testEventCode;
    this.userData = new UserData();

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

    this.contents = [];

    if (this.debug) {
      console.log(`User Data: ${JSON.stringify(this.userData)}\n`);
    }
  }

  /**
   * Add product to contents array.
   */
  addProduct(productId: string, quantity?: number, price?: number) {
    let content: Content = new Content().setId(productId);

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

  private isUserDataEmpty() {
    let isEmpty = true;

    if (typeof this.userData === "object") {
      for (const key in this.userData) {
        if (this.userData[key]) {
          isEmpty = false;
          break;
        }
      }
    }

    return isEmpty;
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
    if (this.isUserDataEmpty()) throw new Error("User Data is empty");

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

    return new ServerEvent()
      .setEventName(eventName)
      .setEventTime(currentTimestamp)
      .setEventId(eventData?.eventId)
      .setUserData(this.userData)
      .setCustomData(
        new CustomData()
          .setContents(this.contents)
          .setCurrency(purchaseData?.currency)
          .setValue(purchaseData?.value),
      )
      .setEventSourceUrl(sourceUrl)
      .setActionSource("website");
  }
}

export default FacebookConversionAPI;

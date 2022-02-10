// @typescript-eslint/no-explicit-any
import bizSdk from "facebook-nodejs-business-sdk";
import { isNumeric } from "./utils/isNumeric";

class FacebookConversionAPI {
  accessToken: string;

  pixelId: string;

  fbp: string | null;

  fbc: string | null;

  userData: any;

  contents: any;

  debug: boolean;

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
    debug = false
  ) {
    this.accessToken = accessToken;
    this.pixelId = pixelId;
    this.fbp = fbp;
    this.fbc = fbc;
    this.debug = debug;
    this.userData = new bizSdk.UserData()
      .setEmails(emails)
      .setPhones(phones)
      .setClientIpAddress(clientIpAddress)
      .setClientUserAgent(clientUserAgent)
      .setFbp(fbp)
      .setFbc(fbc);
    this.contents = [];

    if (this.debug) {
      console.log(`User Data: ${JSON.stringify(this.userData)}\n`);
    }
  }

  /**
   * Add product to contents array.
   */
  addProduct(productId: string, quantity?: number) {
    let content = new bizSdk.Content().setId(productId);

    if (isNumeric(quantity)) {
      content = content.setQuantity(Number(quantity));
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
    eventData?: { eventId?: string }
  ) {
    const eventRequest = new bizSdk.EventRequest(
      this.accessToken,
      this.pixelId
    ).setEvents([
      this.#getEventData(eventName, sourceUrl, purchaseData, eventData),
    ]);

    this.contents = [];

    if (this.debug) {
      console.log(`Event Request: ${JSON.stringify(eventRequest)}\n`);
    }

    return await eventRequest.execute();
  }

  /**
   * Get event data.
   */
  #getEventData(
    eventName: string,
    sourceUrl: string,
    purchaseData?: { value?: number; currency?: string },
    eventData?: { eventId?: string }
  ): any {
    const currentTimestamp = Math.floor((new Date() as any) / 1000);

    return new bizSdk.ServerEvent()
      .setEventName(eventName)
      .setEventTime(currentTimestamp)
      .setEventId(eventData?.eventId)
      .setUserData(this.userData)
      .setCustomData(
        new bizSdk.CustomData()
          .setContents(this.contents)
          .setCurrency(purchaseData?.currency)
          .setValue(purchaseData?.value)
      )
      .setEventSourceUrl(sourceUrl)
      .setActionSource("website");
  }
}

export default FacebookConversionAPI;

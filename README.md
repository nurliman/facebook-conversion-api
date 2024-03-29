Facebook Conversion API

> Node.js wrapper for [Facebook's Conversion API](https://developers.facebook.com/docs/marketing-api/conversions-api/)

## Install

```bash
npm install @nurliman/facebook-conversion-api
```

## Initiate Facebook Conversion API

```node
// ES6 import or TypeScript
import FacebookConversionAPI from "@nurliman/facebook-conversion-api";
// CommonJS
const FacebookConversionAPI = require("@nurliman/facebook-conversion-api").default;

const FBConversionAPI = new FacebookConversionAPI(
  "accessToken",
  "pixelId",
  ["email1", "email2"], // or null
  ["phone1", "phone2"], // or null
  "clientIpAddress",
  "clientUserAgent",
  "fbp", // or null
  "fpc", // or null
  "externalId", // or null
  "debug", // default to false
);
```

Read more here on how you can get your [access token](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/#access-token) and [fbp/fpc identifiers](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/fbp-and-fbc/).

### ViewContent Event

```node
FBConversionAPI.addProduct("productId", quantity);
FBConversionAPI.sendEvent(
  "ViewContent",
  sourceUrl,
  { value: 1000, currency: "USD" },
  { eventId: "eventId" },
);
```

### Add To Cart Event

```node
FBConversionAPI.addProduct("productId", quantity);
FBConversionAPI.sendEvent(
  "AddToCart",
  sourceUrl,
  { value: 1000, currency: "USD" },
  { eventId: "eventId" },
);
```

### Initiate Checkout Event

```node
FBConversionAPI.addProduct("productId", quantity);
FBConversionAPI.sendEvent(
  "InitiateCheckout",
  sourceUrl,
  { value: 1000, currency: "USD" },
  { eventId: "eventId" },
);
```

### Purchase Event

```node
FBConversionAPI.addProduct("productId", quantity);
FBConversionAPI.sendEvent(
  "Purchase",
  sourceUrl,
  { value: 1000, currency: "USD" },
  { eventId: "eventId" },
);
```

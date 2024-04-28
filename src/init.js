import { BinanceClient } from "./models/createCient";

import { apiKey, apiSecret } from "./assets/keys";

export const client = new BinanceClient(apiKey, apiSecret)
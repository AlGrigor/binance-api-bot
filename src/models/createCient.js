import { Spot, Futures } from '@binance/connector';

export class BinanceClient {
  constructor(apiKey, apiSecret) {
    if (!BinanceClient.instance) {
      this.spotClient = new Spot(apiKey, apiSecret);
      //this.futuresClient = new Futures(apiKey, apiSecret);
      BinanceClient.instance = this;
    }

    return BinanceClient.instance;
  }

  // Методы для работы с Spot-торговлей
  async spotAccount() {
    try {
      const response = await this.spotClient.account();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async spotNewOrder(symbol, side, type, options) {
    try {
      const response = await this.spotClient.newOrder(
        symbol,
        side,
        type,
        options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // Методы для работы с Futures-торговлей
  // async futuresAccount() {
  //   try {
  //     const response = await this.futuresClient.account();
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  // async futuresNewOrder(symbol, side, type, options) {
  //   try {
  //     const response = await this.futuresClient.newOrder(
  //       symbol,
  //       side,
  //       type,
  //       options
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }
}

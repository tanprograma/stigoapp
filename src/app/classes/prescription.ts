import { CommodityItem } from 'src/app/types';

export class Prescription {
  host: any;
  client: string;
  commodities: CommodityItem[];
  constructor(host: any) {
    this.host = host;
    this.client = '';
    this.commodities = [
      {
        commodity: '',
        requested: 0,
        issued: 0,
      },
    ];
  }

  public add() {
    this.commodities.push({
      commodity: '',
      requested: 0,
      issued: 0,
    });
  }
  public remove() {
    if (this.commodities.length == 1) return;
    this.commodities.pop();
  }

  public getPayload() {
    this.commodities.forEach((commodity: CommodityItem) => {
      commodity.issued = commodity.requested;
    });
    return {
      host: this.host,
      commodities: this.commodities,
      client: this.client,
    };
  }
  public validate(clients: any, commodities: any) {
    const isClient = this.validateClient(clients);
    console.log(`isClient:${isClient}`);
    if (!isClient) return false;
    const isCommodities = this.validateCommodities(commodities);
    console.log(`isCommodities:${isCommodities}`);
    if (!isCommodities) return false;
    return true;
  }
  private validateClient(clients: any) {
    return clients.includes(this.client.toLowerCase());
  }
  private validateCommodities(commodities: any) {
    let isCommodities: boolean = true;
    for (let i = 0; i < this.commodities.length; i++) {
      const item = this.commodities[i];
      const isQuantity = item.requested > 0;
      if (!isQuantity) {
        isCommodities = false;
        // console.log(`failed quantity: ${item.quantity}`);
        break;
      }
      const isCommodity = commodities.includes(item.commodity.toLowerCase());
      if (!isCommodity) {
        isCommodities = false;
        // console.log(`failed commodity`);
        break;
      }
    }
    return isCommodities;
  }
}

// interface dispensedVolume {
//   date: number;
//   quantity: number;
// }
// interface Dispensed {
//   dispensed: dispensedVolume[];
//   commodity: string;
//   _id: string;
// }
interface Store {
  _id?: string;
  store: string;
}
interface Commodity {
  _id?: string;
  commodity: string;
}
interface CommodityItem {
  _id?: string;
  commodity: string;
  requested: number;
  issued: number;
}
interface Client {
  _id?: string;
  client: string;
}
interface TransactionItem {
  requested: number;
  issued: number;
  commodity: Commodity;
}
interface Transaction {
  _id?: string;
  date: number;
  requester?: Store;
  client?: Client;
  issuer: Store;
  items: TransactionItem[];
  status?: boolean;
}

// interface InventoryItem {
//   store: Store;
//   commodity: Commodity;
//   dispensed: TransactionItem[];
//   issued: TransactionItem[];
//   received: TransactionItem[];
// }
interface InventoryItem {
  store: Store;
  commodity: string;
  beggining: number;
  dispensed: TranItem[];
  issued: TranItem[];
  received: TranItem[];
}
interface TranItem {
  date: number;
  quantity: number;
}
interface View {
  icon: any;
  view: string;
}
interface Issue {
  request_date: any;
  issue_date?: any;
  host: string;
  destination: string;
  commodities: CommodityItem[];
  isIssued: boolean;
  id: number | string;
  inspect?: boolean;
}
export {
  TranItem,
  View,
  Store,
  Client,
  Issue,
  Commodity,
  CommodityItem,
  TransactionItem,
  Transaction,
  InventoryItem,
};

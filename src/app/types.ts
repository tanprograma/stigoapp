// basic types
interface Store {
  _id?: any;
  _name: string;
  isWarehouse?: boolean;
  isSupplier?: boolean;
  isOutlet?: boolean;
}
interface Commodity {
  _id?: any;
  _name: string;
}
interface Client {
  _id?: any;
  _name: string;
}
interface Transaction {
  date: any;
  id: any;
  quantity: number;
}
interface RequestItem {
  commodity: any;
  requested: number;
  issued: number;
}

interface Request {
  _id?: any;
  request_date?: any;
  issue_date?: any;
  host: any;
  client: any;
  items: RequestItem[];
  isIssued?: boolean;
}
interface Inventory {
  store: any;
  commodity: any;
  beggining: number;
  dispensed: Transaction[];
  issued: Transaction[];
  received: Transaction[];
}

interface View {
  icon: any;
  view: string;
}

export {
  View,
  Store,
  Client,
  Commodity,
  Transaction,
  RequestItem,
  Request,
  Inventory,
};

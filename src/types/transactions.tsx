export enum TransactionState {
  PREPARED = "prepared",
  COMMITED = "commited",
}

export interface ITransaction {
  uuid: string;
  card_uuid: string;
  delta: null | number;
  state: TransactionState;
  period: number | null;
  period_activate: number | null;
  user_uid: string;
  store_uuid: string;
  device_uuid: string;
  receipt_uuid: string;
  comment: string;
}

export interface IReceipt {
  uuid: string;
  user_uid: string;
  card_uuid: string;
  type: string;
  number: null | number;
  period: null | string;
  total: null | number;
  totalWithDiscount: null | number;
  bonus: null | number;
  payment: null | number;
}

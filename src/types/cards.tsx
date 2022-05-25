export enum CardStatus {
  ACTIVE = "active",
  BLOCKED = "blocked",
}
export interface ICard {
  uuid: string;
  account_id: string;
  type_uuid: string | null;
  number: string;
  email: string | null;
  status: CardStatus;
  holder: string;
  phone: string;
  birthdate: string;
  created_date: string;
  created_user: string;
  created_store_uuid: string | null;
  created_device_uuid: string | null;
  sales: string | null;
  balance: string | null;
  created_employee_uuid: null | string;
}

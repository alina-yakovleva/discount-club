export enum CardStatus {
  ACTIVE = "active",
  BLOCKED = "blocked",
}
export interface ICard {
  uuid: string;
  type_uuid: string;
  number: string;
  status: CardStatus;
  holder: string;
  phone: number;
  birthdate: string;
  created_date: number;
  created_user: string;
  created_store_uuid: string;
  created_device_uuid: string;
  sales: number | null;
  balance: number | null;
}

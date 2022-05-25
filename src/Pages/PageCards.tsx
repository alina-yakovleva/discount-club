import { FC } from "react";
import Cards from "../components/Cards";
import { CardStatus, ICard } from "../types/cards";
const card: ICard = {
  uuid: "1c421e18-8cc6-4c42-b87c-9898d94cb428",
  account_id: "412",
  type_uuid: null,
  number: "1",
  status: CardStatus.ACTIVE,
  holder: "Дальстрой!",
  phone: "79504241345",
  email: null,
  birthdate: "1989-06-06",
  sales: "0.00",
  created_date: "1625036090",
  created_user: "01-000000000722610",
  created_store_uuid: null,
  created_device_uuid: null,
  created_employee_uuid: null,
  balance: "3084.16",
};

const PageCards: FC = () => {
  return <Cards cards={[card]} />;
};
export default PageCards;

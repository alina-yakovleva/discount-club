import Cards from "./components/Cards";
import Receipts from "./components/Receipts";
import Transactions from "./components/Transactions";
import { CardStatus, ICard } from "./types/cards";
import { IReceipt } from "./types/receipts";
import { ITransaction, TransactionState } from "./types/transactions";

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

const receipt: IReceipt = {
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  user_uid: "string",
  card_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  type: "SELL",
  number: 0,
  period: 0,
  total: 0,
  totalWithDiscount: 0,
  bonus: 0,
  payment: 0,
};

const transaction: ITransaction = {
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  card_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  delta: 0,
  state: TransactionState.PREPARED,
  period: 0,
  period_activate: 0,
  user_uid: "54-858996333099876",
  store_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  device_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  receipt_uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  comment: "string",
};
function App() {
  return (
    <div className="App">
      {/* <Cards cards={[card]} /> */}
      {/* <Receipts receipts={[receipt]} /> */}
      <Transactions transactions={[transaction]} />
    </div>
  );
}

export default App;

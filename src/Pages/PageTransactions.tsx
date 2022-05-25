import { IconButton } from "@mui/material";
import { FC } from "react";
import Transactions from "../components/Transactions";
import { ITransaction, TransactionState } from "../types/transactions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

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
const PageTransactions: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <IconButton>
        <ArrowBackIcon onClick={() => navigate("/")} />
      </IconButton>
      <Transactions transactions={[transaction]} />
    </div>
  );
};
export default PageTransactions;

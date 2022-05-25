import { FC } from "react";
import Receipts from "../components/Receipts";
import { IReceipt } from "../types/receipts";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import PageCards from "./PageCards";

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
const PageReceipts: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <IconButton>
        <ArrowBackIcon onClick={() => navigate("/")} />
      </IconButton>
      <Receipts receipts={[receipt]} />
    </div>
  );
};
export default PageReceipts;

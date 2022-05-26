import { FC, useEffect, useState } from "react";
import Receipts from "../components/Receipts";
import { IReceipt } from "../types/receipts";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import PageCards from "./PageCards";
import { getReceipts } from "../api/receipts";

var to = new Date().getTime(); //"now"
var from = new Date("26.05.2022").getTime(); // some date

const PageReceipts: FC = () => {
  const [receipts, setReceipts] = useState<IReceipt[]>([]);
  const [value, setValue] = useState<Date | null>(null);

  const { uuid } = useParams<"uuid">();

  const navigate = useNavigate();

  useEffect(() => {
    getReceipts(from, to, uuid).then((receipt) => setReceipts(receipt));
  }, []);

  return (
    <div>
      <IconButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <Receipts receipts={receipts} />
    </div>
  );
};
export default PageReceipts;

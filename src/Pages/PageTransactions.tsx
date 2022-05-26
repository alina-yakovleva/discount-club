import { IconButton } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Transactions from "../components/Transactions";
import { ITransaction } from "../types/transactions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { getTransactions } from "../api/transactions";

const PageTransactions: FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const navigate = useNavigate();

  const { uuid } = useParams();

  useEffect(() => {
    getTransactions(0, 0, uuid).then((transaction) =>
      setTransactions(transaction)
    );
  }, []);
  return (
    <div>
      <IconButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <Transactions transactions={transactions} />
    </div>
  );
};
export default PageTransactions;

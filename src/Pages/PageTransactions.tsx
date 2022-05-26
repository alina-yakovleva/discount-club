import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

import DateField from "../components/DateField";
import Transactions from "../components/Transactions";

import { ITransaction } from "../types/transactions";

import { getTransactions } from "../api/transactions";

const PageTransactions: FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);

  const navigate = useNavigate();

  const { uuid } = useParams();

  useEffect(() => {
    getTransactions(from, to, uuid).then((transaction) =>
      setTransactions(transaction)
    );
  }, [from, to, uuid]);
  return (
    <div>
      <IconButton onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </IconButton>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <DateField label="Начало" value={from} onChange={setFrom} />
        <DateField label="Окончание" value={to} onChange={setTo} />
      </div>
      <Transactions transactions={transactions} />
    </div>
  );
};
export default PageTransactions;

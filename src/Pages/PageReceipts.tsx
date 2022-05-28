import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, CircularProgress } from "@mui/material";

import Receipts from "../components/Receipts";
import DateField from "../components/DateField";

import { IReceipt } from "../types/receipts";

import { getReceipts } from "../api/receipts";

const PageReceipts: FC = () => {
  const [receipts, setReceipts] = useState<IReceipt[]>([]);

  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  const { uuid } = useParams<"uuid">();

  const navigate = useNavigate();

  useEffect(() => {
    getReceipts(from, to, uuid).then((receipts) => {
      setReceipts(receipts);
      setLoading(false);
    });
  }, [from, to, uuid]);

  return loading ? (
    <Box display="flex" justifyContent="center" pt={20}>
      <CircularProgress size={100} />
    </Box>
  ) : (
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
      <Receipts receipts={receipts} />
    </div>
  );
};
export default PageReceipts;

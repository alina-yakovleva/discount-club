import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ITransaction } from "../../types/transactions";
import { dateFormat } from "../../utils/dateFormat";

interface ITransactionsProps {
  transactions: ITransaction[];
}
const Transactions: FC<ITransactionsProps> = ({ transactions }) => {
  return (
    <TableContainer>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          margin: "20px",
          textDecoration: "underline",
        }}
      >
        Список транзакций
      </Typography>
      <Table sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Статус транзакции</TableCell>
            <TableCell align="center">Период</TableCell>
            <TableCell align="center">Период активиации</TableCell>
            <TableCell align="center">Комментарий</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.uuid}>
              <TableCell align="center">{transaction.state}</TableCell>
              <TableCell align="center">
                {dateFormat(transaction.period)}
              </TableCell>
              <TableCell align="center">
                {transaction.period_activate}
              </TableCell>
              <TableCell align="center">{transaction.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Transactions;

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { FC } from "react";
import { ITransaction } from "../../types/transactions";

interface ITransactionsProps {
  transactions: ITransaction[];
}
const Transactions: FC<ITransactionsProps> = ({ transactions }) => {
  return (
    <TableContainer>
      <Table sx={{ width: "100vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Статус транзакции</TableCell>
            <TableCell align="right">Период</TableCell>
            <TableCell align="right">Период активиации</TableCell>
            <TableCell align="right">Комментарий</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow>
              <TableCell align="right">{transaction.state}</TableCell>
              <TableCell align="right">{transaction.period}</TableCell>
              <TableCell align="right">{transaction.period_activate}</TableCell>
              <TableCell align="right">{transaction.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Transactions;

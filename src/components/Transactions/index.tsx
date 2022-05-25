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
            <TableRow>
              <TableCell align="center">{transaction.state}</TableCell>
              <TableCell align="center">{transaction.period}</TableCell>
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

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { FC } from "react";
import { IReceipt } from "../../types/receipts";

interface IReceiptsProps {
  receipts: IReceipt[];
}
const Receipts: FC<IReceiptsProps> = ({ receipts }) => {
  return (
    <TableContainer>
      <Table sx={{ width: "100vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Номер чека</TableCell>
            <TableCell align="right">Тип</TableCell>
            <TableCell align="right">Период</TableCell>
            <TableCell align="right">Бонус</TableCell>
            <TableCell align="right">Оплата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receipts.map((receipt) => (
            <TableRow>
              <TableCell align="right">{receipt.number}</TableCell>
              <TableCell align="right">{receipt.type}</TableCell>
              <TableCell align="right">{receipt.period}</TableCell>
              <TableCell align="right">{receipt.bonus}</TableCell>
              <TableCell align="right">{receipt.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Receipts;

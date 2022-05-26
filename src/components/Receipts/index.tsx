import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { FC } from "react";
import { IReceipt } from "../../types/receipts";
import { dateFormat } from "../../utils/dateFormat";

interface IReceiptsProps {
  receipts: IReceipt[];
}
const Receipts: FC<IReceiptsProps> = ({ receipts }) => {
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
        Список чеков
      </Typography>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Номер чека</TableCell>
            <TableCell align="center">Тип</TableCell>
            <TableCell align="center">Период</TableCell>
            <TableCell align="center">Бонус</TableCell>
            <TableCell align="center">Оплата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receipts.map((receipt) => (
            <TableRow key={receipt.card_uuid}>
              <TableCell align="center">{receipt.number}</TableCell>
              <TableCell align="center">{receipt.type}</TableCell>
              <TableCell align="center">{dateFormat(receipt.period)}</TableCell>
              <TableCell align="center">{receipt.bonus}</TableCell>
              <TableCell align="center">{receipt.payment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Receipts;

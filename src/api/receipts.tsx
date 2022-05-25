import { IReceipt } from "../types/receipts";
import { axios } from "./config";

type IGetReceiptsResponse = IReceipt[];

export const getReceipts = (from: number, to: number, cardUuid: string) =>
  axios
    .get<IGetReceiptsResponse>("/receipt", {
      params: {
        from,
        to,
        cardUuid,
      },
    })
    .then((res) => res.data);

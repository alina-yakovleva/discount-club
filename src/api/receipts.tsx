import { IReceipt } from "../types/receipts";
import { axios } from "./config";

type IGetReceiptsResponse = IReceipt[];

export const getReceipts = (
  from: Date | null,
  to: Date | null,
  cardUuid?: string
) =>
  axios
    .get<IGetReceiptsResponse>("/receipt", {
      params: {
        from: from?.getTime(),
        to: from?.getTime(),
        cardUuid,
      },
    })
    .then((res) => res.data);

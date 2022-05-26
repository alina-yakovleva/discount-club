import { ITransaction } from "../types/transactions";
import { axios } from "./config";

type IGetTransactionsResponse = ITransaction[];

export const getTransactions = (
  from: Date | null,
  to: Date | null,
  cardUuid?: string
) =>
  axios
    .get<IGetTransactionsResponse>("/transaction", {
      params: {
        from: from?.getTime(),
        to: from?.getTime(),
        card_uuid: cardUuid,
      },
    })
    .then((res) => res.data);

type IRegistateTransactionResponse = ITransaction;

export const registrateTransaction = (transaction: ITransaction) =>
  axios
    .post<IRegistateTransactionResponse>("/transaction", transaction)
    .then((res) => res.data);

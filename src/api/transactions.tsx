import { ITransaction } from "../types/transactions";
import { axios } from "./config";

type IGetTransactionsResponse = ITransaction[];

export const getTransactions = (from: number, to: number, cardUuid?: string) =>
  axios
    .get<IGetTransactionsResponse>("/transaction", {
      params: {
        from,
        to,
        card_uuid: cardUuid,
      },
    })
    .then((res) => res.data);

type IRegistateTransactionResponse = ITransaction;

export const registrateTransaction = (transaction: ITransaction) =>
  axios
    .post<IRegistateTransactionResponse>("/transaction", transaction)
    .then((res) => res.data);

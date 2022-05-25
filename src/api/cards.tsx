import { ICard } from "../types/cards";
import { axios } from "./config";

type IGetCardsResponse = ICard[];

export const getCards = () =>
  axios.get<IGetCardsResponse>("/card").then((res) => res.data);

type ICreateCardResponse = ICard;

export const createCard = (card: ICard) =>
  axios.post<ICreateCardResponse>("/card", card).then((res) => res.data);

type IGetCardValueResponse = ICard;
type IFields = keyof Pick<ICard, "uuid" | "number" | "phone">;

export const getCardByValue = (field: IFields, value: string) =>
  axios
    .get<IGetCardValueResponse>(`/card/${value}`, {
      params: {
        field,
      },
    })
    .then((res) => res.data);

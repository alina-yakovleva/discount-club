import { FC, useEffect, useState } from "react";
import { getCards } from "../api/cards";
import Cards from "../components/Cards";
import { ICard } from "../types/cards";

const PageCards: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    getCards().then((cards) => setCards(cards));
  }, []);

  return <Cards cards={cards} />;
};
export default PageCards;

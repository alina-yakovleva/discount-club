import { Box, CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { getCards } from "../api/cards";
import Cards from "../components/Cards";
import { ICard } from "../types/cards";

const PageCards: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCards().then((cards) => {
      setCards(cards);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Box display="flex" justifyContent="center" pt={20}>
      <CircularProgress size={100} />
    </Box>
  ) : (
    <Cards cards={cards} />
  );
};
export default PageCards;

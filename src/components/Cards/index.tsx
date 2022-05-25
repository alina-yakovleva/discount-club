import {
  Card as MuiCard,
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { FC } from "react";
import { ICard } from "../../types/cards";

interface ICardsProps {
  cards: ICard[];
}

const Cards: FC<ICardsProps> = ({ cards }) => {
  return (
    <MuiCard sx={{ maxWidth: 400 }}>
      {cards.map((card) => (
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            Номер карты:{card.number}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Номер телефона:{card.phone}
          </Typography>
          <Typography variant="body2">
            Дата создания:{card.created_date}
          </Typography>
        </CardContent>
      ))}

      <CardActions>
        <Button size="large">Чеки </Button>
        <Button size="large">Транзакции</Button>
      </CardActions>
    </MuiCard>
  );
};
export default Cards;

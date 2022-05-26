import {
  Card as MuiCard,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ICard } from "../../types/cards";
import { dateFormat } from "../../utils/dateFormat";

interface ICardsProps {
  cards: ICard[];
}

const Cards: FC<ICardsProps> = ({ cards }) => {
  const navigate = useNavigate();
  return (
    <div>
      {cards.map((card) => (
        <MuiCard
          key={card.uuid}
          sx={{
            margin: "20px auto",
            maxWidth: 400,
            borderRadius: 3,
            padding: 1,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 25 }}
              color="text.secondary"
              gutterBottom
            >
              Номер карты:{card.number}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Номер телефона:{card.phone}
            </Typography>
            <Typography variant="body2">
              Дата создания:{dateFormat(card.created_date)}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="large"
              onClick={() => navigate(`/card/${card.uuid}/receipts`)}
            >
              Чеки{" "}
            </Button>
            <Button
              size="large"
              onClick={() => navigate(`/card/${card.uuid}/transactions`)}
            >
              Транзакции
            </Button>
          </CardActions>
        </MuiCard>
      ))}
    </div>
  );
};
export default Cards;

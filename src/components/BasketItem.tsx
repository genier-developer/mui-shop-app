import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import {FC} from "react";

type BasketItemType = {
    removeFromOrder: (id: string) => void;
    id: string;
    name: string;
    price: number;
    quantity: number;

}
export const BasketItem: FC<BasketItemType> = ({removeFromOrder, id, name, price, quantity}) => {
    return (
        <ListItem>
            <Typography
                variant="body1"
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromOrder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
}
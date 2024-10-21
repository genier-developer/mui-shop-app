import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import {FC} from "react";

export type Good = {
    id: string,
    category: string,
    name: string,
    poster: string,
    price: number,
}
export type GoodsItemType = Good & {
    setOrder: (goodsItem: { id: string, name: string, price: number }) => void,
}

export const GoodsItem: FC<GoodsItemType> = ({ id, name, price, poster, setOrder }) => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        {name}
                    </Typography>
                    <Typography variant="body1">Цена: {price} руб.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="text"
                        onClick={() => setOrder({id, name, price})}
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
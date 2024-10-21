import { Grid } from '@mui/material';

import {Good, GoodsItem,} from './GoodsItem';
import {FC} from "react";
import {goods} from "../data/goods";

export type GoodListType = {
    goods: Good[],
    setOrder: (goodsItem: { id: string, name: string, price: number })=>void
}

export const GoodsList: FC<GoodListType> = ({setOrder}) => {
    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
}
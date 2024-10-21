import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import { ShoppingBasket } from "@mui/icons-material"
import {FC} from "react";

export type HeaderProps = {
    handleCart: () => void;
    orderLength: number;
}

export const Header: FC<HeaderProps> = ({handleCart, orderLength}) => {
    return (
        <AppBar position="static">
            <Toolbar>

                <Typography
                    variant="h6"
                    component="span"
                    sx={{flexGrow: 1}}
                >
                    Find everything for web-development...
                </Typography>
                <IconButton
                    color="inherit"
                    onClick={handleCart}
                >
                    <Badge
                        color="success"
                        badgeContent={orderLength}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

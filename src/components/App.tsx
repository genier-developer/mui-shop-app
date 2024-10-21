import { useState } from 'react';
import { Basket } from './Basket';
import { Header } from './Header';
import { GoodsList } from './GoodsList';
import { Search } from './Search';
import { Snack } from './Snack';
import { goods } from '../data/goods';
import { Container } from '@mui/material';

const App = () => {
    const [order, setOrder] = useState<{ id: string, name: string, price: number, quantity: number }[]>([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(value);
        setProducts(
            goods.filter((good) =>
                good.name.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const addToOrder = (goodsItem: { id: string; name: string; price: number }) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(item => item.id === goodsItem.id);

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map(item => {
                if (item.id !== goodsItem.id) return item;

                return { ...item, quantity };
            }));
        } else {
            setOrder([...order, { ...goodsItem, quantity }]);
        }

        setSnackOpen(true);
    };

    const removeFromOrder = (goodsItemId: string) => {
        setOrder(order.filter(item => item.id !== goodsItemId));
    };

    return (
        <>
            <Header
                handleCart={() => setCartOpen(true)}
                orderLength={order.length}
            />
            <Container sx={{ mt: '1rem' }}>
                <Search value={search} onChange={handleChange} />
                <GoodsList goods={products} setOrder={addToOrder} />
            </Container>
            <Basket
                order={order}
                removeFromOrder={removeFromOrder}
                cartOpen={isCartOpen}
                closeCart={() => setCartOpen(false)}
            />
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)}
            />
        </>
    );
}

export default App;

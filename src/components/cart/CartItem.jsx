
import { Card, Box, Typography, Button } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//component
import GroupButtons from './GroupButtons';
import useStyle from './styles/cartItemStyle';
// import { addToCart } from '../../redux/actions/cartActions';
import { removeFromCart } from '../../redux/actions/cartActions';


const CartItem = ({ item, removeItemFromCart, setCartItemPrice, setTotalP, setQty }) => {
    const classes = useStyle();
    const [ itemQty, setItemQty ] = useState(1);
    const [ itemPrice, setItemPrice ] = useState(item.info.price.cost);

    useEffect(() => {
        setItemPrice(itemQty * item.info.price.mrp )
        setCartItemPrice(itemPrice)

    }, [itemQty, item, itemPrice, setCartItemPrice])

    const dispatch = useDispatch();

    const removeItemsFromCart = (id) => {
        dispatch(removeFromCart(id));
        console.log("Item", id, "Removed from cart");
    }

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                    <img src={item.info.url} className={classes.image} alt=""/>
                    <GroupButtons itemQty={itemQty} setItemQty={setItemQty} item={item} setQty={setQty} />
            </Box>

            <Box className={classes.rightComponent}>
                <Typography>{item.info.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop: 10}}>Seller: SuperComNet</Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.info.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className = {classes.greyTextColor}><strike>₹{item.info.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388E3C'}}>{item.info.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                   {/*  <span style={{color: '#388E3C'}}>{itemPrice} off</span> &nbsp;&nbsp;&nbsp; */}
                </Typography>
                <Button className={classes.remove} onClick={() => removeItemsFromCart(item.info.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;
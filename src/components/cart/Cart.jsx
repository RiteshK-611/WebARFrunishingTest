import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid  } from '@material-ui/core';
import { removeFromCart } from '../../redux/actions/cartActions';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

//component
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import useStyle from './styles/cartstyle';


const Cart = () => {


    const classes = useStyle();
    const { cartItems } = useSelector(state => state.cart);
    
    // eslint-disable-next-line 
    const [cartItemPrice, setCartItemPrice] = useState(0);
    // eslint-disable-next-line 
    const [totalP, setTotalP] = useState(0)

    const [qty, setQty] = useState(1);
    //TRIAL CART


    //TRIAL CART END

    const dispatch = useDispatch();

    useEffect(() => {
        // localStorage.setItem("cartItems", JSON.stringify(cartItems)) 
    }, [cartItems])

    
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    const buyNow = async () => {
        if(localStorage.getItem('BeLogin') !=null){
            
            let response = await payUsingPaytm({ amount: 500, email: 'bsmhatre888@gmail.com'});
        
            let information = {
                action: 'https://securegw-stage.paytm.in/order/process',
                params: response   
            }
            post(information);
        }
        else {
            alert("⚠️ Login before making payment")
        }

    }    

    return (
        <>
        {
        cartItems.length ?
        <Grid container className={classes.component}>
            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftcomponent}>
                <Box className={classes.header}>
                    <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems.length})</Typography>
                </Box>
                {
                    cartItems.map(item => (
                        <CartItem item={item} key={item.id} removeItemFromCart={removeItemFromCart} setCartItemPrice={setCartItemPrice} setQty={setQty} />
                    ))
                }
                <Box className={classes.bottom}>
                    <Button onClick={() => buyNow()} className={classes.placeorder} variant="contained">Place Order</Button>
                </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems} qty={qty} />
            </Grid> 
        </Grid>
        :<EmptyCart/>
        }
            
       </>
    )
}

export default Cart

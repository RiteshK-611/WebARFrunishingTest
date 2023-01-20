import { Box, Typography } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core';
import { useState, useEffect } from "react";
import useStyle from "./styles/totalviewStyle";
// import GroupButtons from './GroupButtons';
import { useSelector } from "react-redux";

const TotalView = ({ qty }) => {
  const classes = useStyle();

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  // const [state, setState] = useState(cartItems);

  useEffect(() => {
    const totalAmount = () => {
      let price = 0,
        discount = 0;
      cartItems.map((item) => {
        price = price + item.qty * item.info.price.mrp;
        discount =
          discount + (item.info.price.mrp - item.info.price.cost) * item.qty;
        console.log(item.qty, "  ", item.info.price.cost);
        /* price = price + (item.qty * item.info.price.mrp); 
                discount += (item.price.mrp - item.price.cost);*/
        return 0;
      });
      setPrice(price);
      setDiscount(discount);
    };
    totalAmount();
    // console.log('state changed')
  }, [qty, cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price ({cartItems.length} items)
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charge <span className={classes.price}>₹100</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{price - discount + 100}</span>
        </Typography>
        <Typography style={{ color: "green" }}>
          You will Save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;

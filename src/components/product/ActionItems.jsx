import { Button, Box } from "@material-ui/core";
// import { Alert } from '@material-ui/lab';
import clsx from "clsx";
import {
  ShoppingCart as Cart,
  ShoppingBasket as Buy,
  Visibility as View,
} from "@material-ui/icons";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import useStyle from "./styles/actionItemsStyle";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
// import Carousel from 'react-material-ui-carousel'

const ActionItems = ({ product }) => {
  const classes = useStyle();
  // const history = useHistory();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product.id));
    //history.push('/cart')
  };

  const buyNow = async () => {
    if (localStorage.getItem("BeLogin")) {
      let response = await payUsingPaytm({
        amount: 500,
        email: "bsmhatre888@gmail.com",
      });
      let information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    } else {
      alert("⚠️ Login before making payment");
    }
  };

  return (
    <Box className={classes.leftContainer}>
      {/* <Carousel 
                autoPlay={true} 
                animation="slide" 
                navButtonsAlwaysVisible={true} 
                indicators={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: '#fff',
                        color: '#494949',
                        borderRadius: 0,
                        margin: 0,
                    }
                }}
                className={classes.carousel}
            >
                {
                    bannerData.map( images => <img src={images} alt="bannerimg" className={classes.image} /> )
                }
            </Carousel> */}
      <img src={product.url} className={classes.image} alt="" />
      <br />
      {/* <a target="_blank" href={ product.arUrl } style={{textDecoration: 'none'}}  >
                <Button variant="contained" className={clsx(classes.button, classes.viewAr)}><View />View in AR</Button>
            </a> */}
      <div className={classes.buttons}>
        {/* <Button href={product.arUrl} variant="contained" className={clsx(classes.button, classes.viewAr)} startIcon={<View />}>View in AR</Button> */}
        <Button
          component={Link}
          to={`/product/ar/${product.id}`}
          variant="contained"
          className={clsx(classes.button, classes.viewAr)}
          startIcon={<View />}
        >
          View in AR
        </Button>
        <Button
          onClick={() => addItemToCart()}
          variant="contained"
          className={clsx(classes.button, classes.addTocart)}
          startIcon={<Cart />}
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => buyNow()}
          variant="contained"
          className={clsx(classes.button, classes.addTobuy)}
          startIcon={<Buy />}
        >
          Buy Now
        </Button>
      </div>
    </Box>
  );
};

export default ActionItems;

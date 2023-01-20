import { Box, Button, Typography, Badge } from "@material-ui/core";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { Link } from "react-router-dom";
import useStyle from "./styles/HeaderButtonsStyle";
import LoginDialog from "../login/login";
import { LoginContext } from "../../context/ContextProvider";
import { useState, useContext } from "react";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const HeaderButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);
  const { cartItems } = useSelector((state) => state.cart);

  const handleOpenLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {localStorage.getItem("BeLogin") ? (
        <Profile
          account={
            account !== ""
              ? account
              : JSON.parse(localStorage.getItem("BeLogin")).login.u
          }
          setAccount={setAccount}
        />
      ) : (
        <Button
          className={classes.login}
          variant="contained"
          onClick={() => handleOpenLoginDialog()}
        >
          Login
        </Button>
      )}
      {/* <Link ><Button variant="contained" onClick={handleOpenLoginDialog} className={classes.login}>Login</Button></Link>
       */}
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartRoundedIcon />
        </Badge>
        <Typography className={classes.cart}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButtons;

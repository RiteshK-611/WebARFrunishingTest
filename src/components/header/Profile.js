import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import useStyle from './styles/profileStyle';
// import {  useSelector } from 'react-redux';


const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    // const { cartItems } = useSelector(state => state.cart);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
        localStorage.removeItem('BeLogin');
    }
    
    return (
        <>
            <Typography onClick={handleClick} style={{ marginTop: 2, cursor: 'pointer', color: '#000' }}>{account}</Typography>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
                MenuListProps={{
                    classes: {padding: classes.padding},
                }}
            >
                <MenuItem disablePadding='true' onClick={() => { handleClose(); logout(); }}>
                    <ExitToApp fontSize='small' color='primary'/> 
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )    
}

export default Profile;
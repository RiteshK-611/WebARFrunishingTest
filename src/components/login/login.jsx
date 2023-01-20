//PART 4 @ 1:25:20

import { Box, Dialog, DialogContent, Typography, Button, TextField, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx'
import React , {useState} from 'react'
// import {useEffect} from 'react'
import useStyle from './styles/loginStyle'
import {  authenticateLogin, authenticateSignup } from '../../service/api';


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    showPassword: false
};


const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    
    const handleCloseLoginDialog = () => {
        setOpen(false);
        toggleAccount (accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount (accountInitialValues.signup);
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            console.log(response.data.u)
            localStorage.setItem('BeLogin', JSON.stringify({ login : response.data })) ;
            handleCloseLoginDialog();
            setAccount(login.username);
        }
    }

    const signupUser = async () => {
        let res = await authenticateSignup(signup);
        if(!res) return;
        console.log(res.data.u)
        localStorage.setItem('BeLogin', JSON.stringify({ login : res.data })) ;
        handleCloseLoginDialog();
        setAccount(signup.username);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const handleClickShowPassword = () => {
        setSignup({ ...signup, showPassword: !signup.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Dialog  open={open} onClose={handleCloseLoginDialog} >
            <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Box>
                    { (account.view ==='login') ?      
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter your pasword' />
                            { error && <Typography className={classes.error}>Please enter correct Username/Password !!</Typography> }
                            <Typography className={classes.text}>By continuing, you agree to Woodstock's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" className={classes.loginbtn} onClick={() => loginUser()} >Login</Button>
                            <Typography style={{textAlign: 'center'}} className={classes.text}>OR</Typography>
                            <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
                            <Typography onClick={() => toggleSignup()} className={classes.createText} >New to Woodstock? Create an account</Typography>
                        </Box>       
                            :
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter your first name' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter your last name' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter your email ' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter your pasword' />
                            
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={signup.showPassword ? 'text' : 'password'}
                                value={signup.password}
                                onChange={(e) => onInputChange(e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                    {signup.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>

                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter your phone number' />
                            <Button variant='contained' onClick={()=> signupUser() } className={classes.loginbtn}>Sign up</Button>
                        </Box>
                    }
                    
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login

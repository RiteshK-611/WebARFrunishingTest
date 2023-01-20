import { AppBar, Grid, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
import SearchBar from './SearchBar'
import HeaderButtons from './HeaderButtons'
import { Link } from 'react-router-dom'
import useStyle from './styles/HeaderStyle'
import logo from '../../images/logo.webp'

const Header = () => {
    const classes = useStyle();
    const theme = useTheme();
    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const matches = useMediaQuery(theme.breakpoints.down('xs'));
    if(matches)
    {
        return (
            <AppBar className={classes.header}>
                <Grid style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Link to='/' className={classes.component}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Link>
                    <HeaderButtons />
                </Grid>
                <Toolbar style={{display: 'flex', flexDirection: 'column'}}>
                        <SearchBar />
                </Toolbar>
            </AppBar>
        )
    }
    else {
        return (
            <AppBar className={classes.header}>
                <Toolbar style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Link to='/' className={classes.component}>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Link>
                    <SearchBar />
                    <HeaderButtons />
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header

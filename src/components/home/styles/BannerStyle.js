import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    carousel: {
        marginTop: 25,
    },
    image: {
        width: '100%',
        height: 400,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 280
        }
    },
    navbtn: {
        backgroundColor: '#fff',
        color: '#494949',
        borderRadius: 0,
        margin: 0,
        padding: "25px 8px"
    }
}))  

/* makeStyles(theme => ({
    container: {
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
})) */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        background: '#fcfcfc',
        justifyContent: 'space-evenly',
    },
    logo: {
        width: 100,
        marginTop: 5,
        [theme.breakpoints.down('xs')]: {
            width: 70,
            marginTop: 18,
        }
    },
    component: {
        marginLeft: '11%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '6%',
            marginRight: '20%'
            // width: '50px'
        }
    }
    })
)
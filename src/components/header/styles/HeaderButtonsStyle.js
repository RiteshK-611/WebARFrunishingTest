import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    login: {
        background: '#ffebcc',
        color: '#000',
        fontWeight: '600',
        padding: 2,
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            // padding: 5,
            marginTop: 18,
            marginBottom: 5  
        }
    },
    wrapper: {
        margin: '0 4% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            fontsize: 12,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            // margin: '0 -10% 0 auto',
            marginRight: '-13%',
            display: 'flex',
            '& > *': {
                marginRight: 30,
                fontsize: 9,
                textDecoration: 'none',
            },
        }
    },
    cart: {
        marginLeft: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    container: {
        color: '#d58544',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('xs')]: {
            marginRight: 90,
            marginTop: 20
        }
    }
    })
)
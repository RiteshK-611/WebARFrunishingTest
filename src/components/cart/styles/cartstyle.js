import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    component: {
        //marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
        
    },
    leftcomponent: {
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        paddign: '15px, 24px',
        background: '#fff'
    },
    placeorder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 50, 
        display: 'flex',
        marginLeft: 'auto'    
    },
    bottom: {
        padding: '16px, 22px',
        background: '#fff', 
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
    })
)
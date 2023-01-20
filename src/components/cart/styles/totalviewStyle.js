import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    component: {
        //width: '30%',
        background: '#fff', 
        marginLeft: 0,
    },
    header: {
        padding: '16px 24px',
        borderBottom: '1px solid #f0f0f0'
    },
    container: {
        padding: '15px 24px',
        '& > *': {
            marginTop: 20,
            fontSize: 14
        }
    },
    greyTextColor: {
        color: '#878787'
    }, 
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0',
    }
    })
)  

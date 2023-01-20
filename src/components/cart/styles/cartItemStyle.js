import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column'

    },
    rightComponent: {
        margin: 20

    },
    smallText: {
        fontSize: 14
        
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    },
    image: {
        height: 150,
        width: 180
    },
    remove: {
        marginTop: 20,
        fontSize: 14
    }
    })
)
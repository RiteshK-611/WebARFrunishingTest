import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
        component: {
            marginTop: 55,
            backgound: '#F2F2F2',
        },
        container: {
            //margin: '0 80px',
            
            background: '#fff',
            display: 'flex',
            // [theme.breakpoints.down('md')]: {
            //     marginLeft: 5
            // }
        },
        rightcontainer:{
            marginTop: 50,
            '& > *':{
                marginTop: 10
            },
            

        },
        smallText: {
            fontSize: 14,
            verticalAlign: 'baseline',
            '& > *':{
                fontSize: 14,
                marginTop: 10
            }

        }, 
        greyTextcolor: {
            color: '#878787'
        },
        price: {
            fontSize: 24
        },
        badge: {
            fontSize: 16,
            marginRight: 10,
            color: '#663300'
        },
        wrapper: {
            display: 'flex'
        },
        title: {
            fontSize: 28
        }
    })
    
)  
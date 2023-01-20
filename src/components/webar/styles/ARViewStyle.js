import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    arview: {
        // display: 'flex',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
            width: '100%',
            marginTop: 18,
        }
    },
    jfs: {

    }
    })
)
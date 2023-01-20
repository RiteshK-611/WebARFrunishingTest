import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    component: {
        marginTop: 40,
    },
    logout: {
        fontSize: 14,
        marginLeft: 20,
    },
    padding: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0, 
            paddingBottom: 0
        }
    }
})
)
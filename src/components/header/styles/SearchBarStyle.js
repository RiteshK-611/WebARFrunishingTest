import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    search: {
        borderRadius: 25,
        backgroundColor: '#e4e4e4',
        marginLeft: 50,
        width: '38%',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            margin: '10px 0',
            width: '100%',
        }
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'blue',
        borderLeft: 'solid 1px #f2f2f2',
        paddingLeft: 10,
        paddingRight: 10,
    },
    inputRoot: {
        fontSize: 'unset',
        width: '100%',
      },
    inputInput: {
        paddingLeft: 10
    },
    list: {
        position: 'absolute',
        color: '#000000',
        backgroundColor: '#fff',
        marginTop: 30
    }
    })
)
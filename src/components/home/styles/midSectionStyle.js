import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    icon: {
        marginRight: 20,
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
    },
    cardMedia: {
        height: 250,
        width: '100%',
        objectFit: 'cover',
        padding: 15,
        borderRadius: 20,
        "&:hover": {
            objectFit: 'contain',
        }
    },
    cardContent: {
        flexGrow: 1,
        textDecoration: 'none'
    }
}))
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
//import { products } from '../../constants/data'
import useStyle from './styles/midSectionStyle'
import { Link } from 'react-router-dom';

const MidSection = ({products}) => {
    const classes = useStyle();
    return (
        <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    component="img"
                                    image={product.url}
                                    title="product-image"
                                />
                                <CardContent className={classes.cardContent}>
                                   <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{color: "black"}}>
                                   {product.title.longTitle}
                                   </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default MidSection;

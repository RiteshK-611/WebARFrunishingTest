import { Box } from '@material-ui/core'
import Banner from './Banner'
import MidSection from './MidSection'
import useStyle from './styles/HomeStyle'
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts} from '../../redux/actions/productActions';
import Footer from '../footer/Footer';
// import { products } from '../../constants/data';


const Home = () => {
    const classes = useStyle();
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    console.log("Products Display: " + products)

    return (
        <>
        <Box className={classes.component}>
            <Banner />
            <MidSection products={products} />
        </Box>
        <Footer/>
        </>
    )
}

export default Home

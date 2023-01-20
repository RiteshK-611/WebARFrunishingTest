
//import { Box, Table, TableBody, TableRow, Typography, TableCell } from '@material-ui/core';
import { Box, Typography, Grid, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
// import { LocalOffer as Badge } from '@material-ui/icons';
// import clsx from 'clsx'
import useStyle from './styles/detailViewStyle'

//component
import ActionItem from './ActionItems';
//import ProductDetail from './ProductDetail';

const DetailView = ({ match }) => {
    const classes = useStyle();

    const { product } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));

    }, [dispatch, match.params.id])
     
    
    
    return (
        <Box className={classes.component}>
            {/* { product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box style={{minWidth: '40%'}}>
                       <ActionItems product={product}/> 
                    </Box>

                    <Box className={classes.rightcontainer}>
                     <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextcolor)}>
                             8 Rating & 1 Review
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className = {classes.greyTextcolor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C'}}>{product.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography style={{ marginTop: 20, fontWeight: 600}}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge}/> Bank Offer10% off on Citi Credit Cards, up to ₹1500</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Credit Cards, up to ₹1500</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Citi Debit Cards, up to ₹750</Typography>
                            <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Debit Cards, up to ₹750</Typography> 
                        </Box>
                        
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Delivery</TableCell>
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style ={{color: '#2874f0'}}>SuperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>14 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextcolor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                      
                </Box>
            } */}
            { product && Object.keys(product).length &&
                <Grid container className={classes.container} justifyContent='space-around'> 
                    <Grid item lg={6} md={6} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={5} md={5} sm={8} xs={12} className={classes.rightcontainer}>
                        <Typography className={classes.title}>{product.title.longTitle}</Typography>
                            {/* <Typography className={clsx(classes.smallText, classes.greyTextcolor)}>
                                8 Rating & 1 Review
                            </Typography> */}
                            <Typography>
                                <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                                <span className = {classes.greyTextcolor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                                <span style={{ color: '#388E3C'}}>{product.price.discount} off</span> &nbsp;&nbsp;&nbsp;
                            </Typography>
                            {/* <Typography style={{ marginTop: 20, fontWeight: 600}}>Available offers</Typography>
                            <Box className={classes.smallText}>
                                <Typography><Badge className={classes.badge}/> Bank Offer10% off on Citi Credit Cards, up to ₹1500</Typography>
                                <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Credit Cards, up to ₹1500</Typography>
                                <Typography><Badge className={classes.badge}/>Bank Offer10% off on Citi Debit Cards, up to ₹750</Typography>
                                <Typography><Badge className={classes.badge}/>Bank Offer10% off on Kotak Bank Debit Cards, up to ₹750</Typography> 
                            </Box> */}
                            
                            <Table>
                                <TableBody>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextcolor}>Delivery</TableCell>
                                        <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextcolor}>Warranty</TableCell>
                                        <TableCell>No Warranty</TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextcolor}>Seller</TableCell>
                                        <TableCell className={classes.smallText}>
                                            <span style ={{color: '#2874f0'}}>SuperComNet</span>
                                            <Typography>GST invoice Available</Typography>
                                            <Typography>14 Days Return Policy</Typography>
                                            <Typography>View more sellers starting from ₹300</Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.smallText}>
                                        <TableCell className={classes.greyTextcolor}>Description</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                    </Grid>


                    {/* <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid> */}
                </Grid>
            }   
        </Box>
    )
}



export default DetailView;
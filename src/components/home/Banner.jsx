import {useMediaQuery, useTheme} from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constants/data'
import useStyle from './styles/BannerStyle';

const Banner = () => {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if(matches) {
        return (
            <Carousel 
                autoPlay={true} 
                animation="slide" 
                navButtonsAlwaysVisible={false} 
                indicators={false}
                fullHeightHover={false}
                swipe={true}
                navButtonsProps={{
                    className: classes.navbtn,
                }}
                className={classes.carousel}
            >
                {
                    bannerData.map( images => <img key={images.id} src={images.img} alt="bannerimg" className={classes.image} /> )
                }
            </Carousel>
        )
    }
    else {
        return (
            <Carousel 
                autoPlay={true} 
                animation="slide" 
                navButtonsAlwaysVisible={true} 
                indicators={false}
                fullHeightHover={false}
                navButtonsProps={{
                    className: classes.navbtn,
                }}
                className={classes.carousel}
            >
                {
                    bannerData.map( images => <img key={images.id} src={images.img} alt="bannerimg" className={classes.image} /> )
                }
            </Carousel>
        )
    }
}

export default Banner
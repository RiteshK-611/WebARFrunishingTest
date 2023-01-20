import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, styled, Paper, Typography } from '@material-ui/core'
import { getProductDetails } from '../../redux/actions/productActions';
import '@google/model-viewer/dist/model-viewer.min.js';
import QRCode from 'qrcode.react'
import useStyles from './styles/ARViewStyle'
import './style.css';
import hand from './assets/hand.png'
// import { useMediaQuery, useTheme } from '@material-ui/core'

const ARView = ({ match }) => {
  const { product } = useSelector(state => state.getProductDetails);
  const classes = useStyles()
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id])

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '10px 15px'
  }));

  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser?noredirect=1&lq=1
  // https://stackoverflow.com/questions/6666907/how-to-detect-a-mobile-device-with-javascript

  if( navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  ) 
  {
    return (
      <Grid container alignItems="center">
        <Grid item className={classes.arview}>
          <div className={classes.jfs}>
            {
              product && Object.keys(product).length && 
              <model-viewer loading="eager" src={ require(`${product.arModel.android}`) } /* "https://github.com/RiteshK-611/webxr-ar/blob/main/assets/sofa.gltf" */
                ios-src={ require(`${product.arModel.ios}`) }
                // ios-src={ require(`${product.arModel.ios}`).default }
                alt="A 3D model of the product"
                ar
                auto-rotate
                camera-controls> 

                <button slot="ar-button" className="arbutton">
                  View in your space
                </button>
                <div id="ar-prompt">
                  <img src={hand} alt="ar_prompt"/>
                </div>
              </model-viewer> 
            }
          </div>   
        </Grid>
        <Grid item>
          <Item>
            {
              product && Object.keys(product).length &&
              <>
                <Typography style={{color: 'black'}}>{product.title.longTitle}</Typography>
                <br></br><br></br>
                <div style={{textAlign: 'left'}}>
                  INSTRUCTIONS
                  <ol>
                      <li>Click on VIEW MODEL IN YOUR SPACE. This opens your camera</li>
                      <li>Hold your mobile first vertically then horizontally for 5 seconds each</li>
                      <li>Then show the camera your surroundings so that it can recognize and is able to place the marker</li>
                      <li>Once a marker like so (reticle image) appears, assume that this will be the center of the furniture selected</li>
                      <li>Then tap on the screen once, in order to get the model</li>
                  </ol>
                </div>
              </>
            }
          </Item>
        </Grid>
      </Grid>
    );
  }
  else {
    return (
      <Grid container spacing={0} direction="row" justifyContent="space-around" alignItems="center" style={{position: 'absolute', marginTop: 50}}>
        <Grid item lg={8} md={8}>
          <div className={classes.jfs}>
            {
              product && Object.keys(product).length &&
              <model-viewer src={ require(`${product.arModel.android}`) }
                ios-src={ require(`${product.arModel.ios}`) }
                alt="A 3D model of the product"
                ar
                auto-rotate
                camera-controls> 
              </model-viewer>
            }
          </div>
        </Grid>
        <Grid item lg={4} md={4}>
          <Grid container direction="column" alignItems="center" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Grid item>
              <Item>
                {
                  product && Object.keys(product).length &&
                  <>
                    <Typography style={{color: 'black'}}>{product.title.longTitle}</Typography>
                    <br></br><br></br><br></br>
                    <div>
                    <Typography>Scan this QR Code to view it on your Mobile </Typography>
                    <QRCode 
                      id="1234"
                      value={window.location.href}
                      size={128}
                      bgColor={'#ffffff'}
                      fgColor={'#000000'}
                      level={'H'}
                      includeMargin={true}
                    />
                  </div>
                  <br></br><br></br>
                  <div style={{textAlign: 'left'}}>
                    INSTRUCTIONS
                    <ol>
                        <li>Scan the above QR Code to open this page on your mobile device</li>
                        <li>Click on VIEW MODEL IN YOUR SPACE. This opens your camera</li>
                        <li>Hold your mobile first vertically then horizontally for 5 seconds each</li>
                        <li>Then show the camera your surroundings so that it can recognize and is able to place the marker</li>
                        <li>Once a marker like so (reticle image) appears, assume that this will be the center of the furniture selected</li>
                        <li>Then tap on the screen once, in order to get the model</li>
                    </ol>
                  </div>
                  </>
                }
              </Item>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    );
  }

}

export default ARView;
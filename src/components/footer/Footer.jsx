import React from 'react';
import { makeStyles, Container, Box, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import logo from '../../images/logo.webp'

const useStyles = makeStyles((theme) => ({
  rootBox: {
    backgroundColor: '#fcfcfc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0 18px 0',
    margin: 0,
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer style={{boxShadow: '0 14px 1px 18px rgb(0 0 0 / 20%)'}}>
      <Container maxWidth="lg" style={{}}>
        <Box py={6} display="flex" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            <img src={ logo } alt="InAR" width={50} />
          </Link>
          <Link href="https://github.com/RiteshK-611/WebAR_Furnishing" variant="body1" color="textPrimary">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <GitHub style={{ fontSize: 20, marginRight: 5, marginBottom: 5 }}/>Github
            </div>
          </Link>
          {/* <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>© 202I InAR All rights reserved.</Typography> */}
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
import React, {Fragment} from 'react';
import {Box, Typography} from '@mui/material';
import WaveBorder from './WaveBorder';
import CustomCard from './Cards.tsx';
import CryptoCards from './CryptoCards.tsx';

export default function Home(){
  return(
    <Fragment>
      <Box position='relative' backgroundColor="#036ffc" >
        <CustomCard />
        <WaveBorder upperColor="#036ffc" lowerColor="white"/>
      </Box>
      <Box position='relative' backgroundColor="white">
      <Typography variant="h1" component="h2" textAlign="center" color="primary"> Facts </Typography>
        <Typography variant="h6" textAlign="center" color="primary">
        <br />this is the creative part of my Resume
        <br />I built this website with React
        <br />I have 10 years of experience with Visual Art and Graphic Design,
        <br />Proficiency in Adobe Creative Cloud
        <br /> ( After Effects,  Photoshop, Illustrator etc. )
        <br />I have over 4yrs of experience with React, TypeScript & JavaScript.
        <br />
        <br />

        </Typography>
        <WaveBorder upperColor="white" lowerColor="#036ffc"/>
        <WaveBorder upperColor="#036ffc" lowerColor="white"/>
        <Typography variant="h1" component="h2" textAlign="center" color="primary"> Web 3 </Typography>
        <Typography variant="h6" textAlign="center" color="primary">crypto projects im interested in </Typography>
      </Box>
      <Box position='relative' backgroundColor="white">
        <CryptoCards />
      </Box>
    </Fragment>
  ); 
}
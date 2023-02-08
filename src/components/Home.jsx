import React from 'react';
import { Box, Container, Heading, Img } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  const headingOptions = {};
  return (
    <Box>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'full'}>
          <Image src={img1} width="100%" height={'100%'} />
          <Heading
            position={'absolute'}
            top="50%"
            left={'50%'}
            transform="translate(-50%,-50%)"
            bgColor={'blackAlpha.600'}
            padding="4"
            color="white"
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w={'full'} h={'full'}>
          <Image width="100%" height={'100%'} src={img2} />

          <Heading
            position={'absolute'}
            top="50%"
            left={'50%'}
            transform="translate(-50%,-50%)"
            bgColor={'blackAlpha.600'}
            padding="4"
            color="white"
          >
            Gaming is Future
          </Heading>
        </Box>

        <Box w={'full'} h={'full'}>
          <Image width="100%" height={'100%'} src={img3} />
          <Heading
            position={'absolute'}
            top="50%"
            left={'50%'}
            transform="translate(-50%,-50%)"
            bgColor={'blackAlpha.600'}
            padding="4"
            color="white"
          >
            Night life is cool
          </Heading>
        </Box>
      </Carousel>
      <Container minH={'100vh'} maxW="container.xl"></Container>
    </Box>
  );
};

export default Home;

import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import classes from './Demo.module.css';
import { rem } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';




import HomeCarousal1 from '../assets/HomeCarousel/1.jpg'
import HomeCarousal2 from '../assets/HomeCarousel/2.jpg'
import HomeCarousal3 from '../assets/HomeCarousel/3.jpg'
import HomeCarousal4 from '../assets/HomeCarousel/4.jpg'
import HomeCarousal5 from '../assets/HomeCarousel/5.jpg'
import HomeCarousal6 from '../assets/HomeCarousel/6.jpg'
import HomeCarousal7 from '../assets/HomeCarousel/7.jpg'
import HomeCarousal8 from '../assets/HomeCarousel/8.jpg'

const images = [HomeCarousal1, HomeCarousal2, HomeCarousal3, HomeCarousal4, HomeCarousal5, HomeCarousal6, HomeCarousal7, HomeCarousal8];

function HomeCarousel() {

  return <Carousel withIndicators align="start"
  nextControlIcon={<IconArrowRight style={{ width: rem(32), height: rem(32) }} />}
      previousControlIcon={<IconArrowLeft style={{ width: rem(32), height: rem(32) }} />}

  width="100%" controlsOffset="xl" classNames={classes} slidesToScroll={1} loop>{images.map((url) => (
    <Carousel.Slide key={url}>
      <Image width={"100%"} src={url} />
    </Carousel.Slide>
  ))}



   {/* <div className='w-[97%] absolute top-[45%] left-5 border-black border-2 h-[500px]'>
    <div className='w-1/4 max-w-[337px]'>
        <h2>Revamp your home in style</h2>
        <span className='flex w-1/2'>
            <div className='w-1/2 h-1/4'>
                <img src={box1_1} alt="" />
                <p></p>
            </div>
            <div className='w-1/2 h-1/4'>
                <img src={box1_2} alt="" />
            </div>
            
        </span>
        <span className='flex w-1/2'>
            <div className='w-1/2 h-1/4'>
                <img src={box1_3} alt="" />
            </div>
            <div className='w-1/2 h-1/4'>
                <img src={box1_4} alt="" />
            </div>
            
        </span>
    </div>
  </div>  */}
      </Carousel>;


}
export default HomeCarousel;




/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Fab from "@mui/material/Fab";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Welcome () {
  return (
    <div className=' tw-border-b tw-border-646464 tw-h-fit tw-relative tw-overflow-hidden'>
      <div className=''>
        <img src='/images/bg/shape-c-right-green.svg' className='tw-hidden xl:tw-block  tw-h-[1000px] md:tw-h-[1280px] tw-absolute 2xl:tw-h-[868px] tw-object-left tw-object-cover tw-opacity-50' />
        <img src='/images/bg/shape-c-left-green.svg' className='tw-h-[1000px] md:tw-h-[1280px] tw-absolute 2xl:tw-h-[868px] tw-object-right tw-object-cover tw-opacity-50' />
      </div>
      <div className='tw-flex 2xl:tw-pt-0 tw-relative tw-flex-col 2xl:tw-flex-row tw-justify-evenly 2xl:tw-justify-between xl:tw-px-32 md:tw-px-16 tw-px-4 tw-items-center tw-z-10 tw-h-[1000px] md:tw-h-[1280px] 2xl:tw-h-[868px] xl:tw-w-[1280px] 2xl:tw-w-screen tw-m-auto'>
        <div className=' tw-flex-col tw-inline-block'>
          <div className=' tw-font-Antique tw-text-center 2xl:tw-text-start text-green tw-text-[2.4rem] md:tw-text-[3.5rem] tw-font-bold tw-leading-[100%] md:tw-max-w-[768px] 2xl:tw-max-w-[500px]'>Welcome to<br />our International Speaking Club!</div>
          <div className=' tw-mt-8 tw-font-Reckless tw-text-lg md:tw-max-w-[768px] 2xl:tw-max-w-[450px] tw-text-[18px] tw-leading-[140%]'>
            Are you ready to learn new languages, make friends, and have fun? Our club is the perfect place for you! People from all around the world gather here to learn together, make friends, and practice languages from scratch.
          </div>
          <div className=' tw-mt-12 tw-flex tw-items-center xl:tw-items-start tw-w-full tw-justify-center 2xl:tw-justify-start'>
            <Fab variant="extended" color="primary">
              <NavigationIcon sx={{ mr: 1 }} />
              Book a Product
            </Fab>
          </div>
        </div>
        <div className='xl:tw-max-w-[768px] tw-z-10'>
          <img src='/images/bg/product-shot-home.png' className='xl:tw-h-[500px]' />
        </div>
      </div>
    </div>
  )
}
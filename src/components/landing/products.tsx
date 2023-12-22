/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Fab from "@mui/material/Fab";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Products () {
  return (
    <div className=" tw-bg-white tw-flex tw-justify-center tw-items-center">
      <div className=' tw-w-[1280px] tw-m-auto'>
        <div className=' tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-px-[24px] tw-pt-[64px] sm:tw-px-[72px] sm:tw-pt-[128px]'>
          <div className=' tw-block'>
            <img src="/images/bg/product1.png" alt="" className='tw-max-w-[100%] sm:tw-max-w-[472px] tw-max-h-[320px]' />
          </div>
          <div className=' tw-max-w-[550px] tw-w-full tw-flex tw-flex-col tw-justify-around tw-h-[328px]'>
            <div className=' tw-text-[#00614F] tw-text-4xl tw-leading-[90%] tw-font-[Zen Kaku Gothic Antique] tw-font-semibold'>Speaking up is tough. We make it easier.</div>
            <div className='tw-text-[#222] tw-text-lg tw-leading-[140%] tw-font-Reckless'>Our platform, powered by GPT, makes learning easy and enjoyable. You don't need any prior experience - our friendly community is here to support you every step of the way.</div>
          </div>
        </div>
        <div className=' tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-px-[24px] tw-pt-[64px] sm:tw-px-[72px] sm:tw-pt-[128px]'>
          <div className=' tw-block xl:tw-hidden'>
            <img src="/images/bg/product2.png" alt="" className='tw-max-w-[100%] sm:tw-max-w-[504px] tw-max-h-[432px]' />
          </div>
          <div className=' tw-max-w-[550px] tw-w-full tw-flex tw-flex-col tw-justify-around tw-h-[328px]'>
            <div className=' tw-text-[#00614F] tw-text-4xl tw-leading-[90%] tw-font-[Zen Kaku Gothic Antique] tw-font-semibold'>Unlock the World of Languages.</div>
            <div className='tw-text-[#222] tw-text-lg tw-leading-[140%] tw-font-Reckless'>Imagine meeting people from different countries, talking with them, and improving your language skills together. Our platform is designed to help you connect with others and practice languages in a fun and interactive way.</div>
          </div>
          <div className=' tw-hidden xl:tw-block'>
            <img src="/images/bg/product2.png" alt="" className='tw-max-w-[252px] sm:tw-max-w-[504px] tw-max-h-[432px]' />
          </div>
        </div>
        <div className=' tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-px-[24px] tw-pt-[64px] sm:tw-px-[72px] sm:tw-pt-[128px]'>
          <div className=' tw-block'>
            <img src="/images/bg/product3.png" alt="" className='tw-max-w-[100%] sm:tw-max-w-[472px] tw-max-h-[320px]' />
          </div>
          <div className=' tw-max-w-[550px] tw-w-full tw-flex tw-flex-col tw-justify-around tw-h-[328px]'>
            <div className=' tw-text-[#00614F] tw-text-4xl tw-leading-[90%] tw-font-[Zen Kaku Gothic Antique] tw-font-semibold'>Break Barriers, Make Friends.</div>
            <div className='tw-text-[#222] tw-text-lg tw-leading-[140%] tw-font-Reckless'>But that's not all! Our club is not just about learning languages. We also have activities and discussions about different interests. We can talk about books, movies, travel, business, fashion, art  and more. It's a great opportunity to meet people who share your hobbies and passions.</div>
          </div>
        </div>
        <div className=' tw-flex tw-flex-wrap tw-items-center tw-justify-around tw-px-[24px] tw-py-[64px] sm:tw-px-[72px] sm:tw-py-[128px]'>
          <Fab variant="extended" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            See our products
          </Fab>
        </div>
      </div>
    </div>
  )
}
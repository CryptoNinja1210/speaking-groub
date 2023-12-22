/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Fab from "@mui/material/Fab";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Welcome () {
  return (
    <div className="tw-bg-[url('/images/bg/club.jpg')] tw-h-[880px] tw-bg-top tw-bg-no-repeat tw-bg-cover">
      <div className="tw-bg-[url('/images/bg/shape-c-left-gray.svg')] tw-h-[880px] tw-bg-bottom">
        <div className="tw-bg-[url('/images/bg/shape-c-right-gray.svg')] tw-h-[880px] tw-bg-bottom">
          <div className='tw-bg-club-gradient tw-h-[880px] tw-items-center'>
            <div className=' tw-flex tw-flex-col tw-justify-center tw-max-w-[1098px] tw-h-[880px] tw-m-auto sm:tw-p-5 tw-p-0 tw-items-center'>
              <div className=' tw-font-Antique tw-text-center tw-text-white tw-text-[2rem] lg:tw-text-[4rem] tw-font-bold tw-leading-[90%]'>Don't miss out on this amazing opportunity! Sign up today and let's learn, connect, and have fun together!</div>
              <div className=' tw-mt-8 tw-font-Reckless tw-text-lg tw-text-[18px] tw-leading-[140%] tw-max-w-[832px] tw-text-white tw-text-center tw-pt-14'>
                Are you eager to practice a new language with people from diverse countries? Look no further! Our Language Speaking Club is the perfect platform for language enthusiasts like you.
              </div>
              <div className=' tw-mt-12 tw-flex tw-items-center xl:tw-items-start tw-w-full tw-justify-center tw-pt-14'>
                <Fab variant="extended" className=" tw-bg-white tw-text-[#00B687]">
                  Book a Product
                  <NavigationIcon sx={{ ml: 1 }} />
                </Fab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
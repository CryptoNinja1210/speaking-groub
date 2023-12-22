/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Fab from "@mui/material/Fab";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Products () {
  return (
    <div className=" tw-bg-white tw-flex tw-justify-center tw-items-center tw-pb-14">
      <div className=' tw-w-[1280px] tw-m-auto'>
        <div className=' tw-text-center tw-px-[24px] tw-py-[32px] sm:tw-px-[54px] sm:tw-py-[72px] tw-text-[#00B687] tw-font-Antique tw-font-bold tw-text-5xl sm:tw-text-[80px]'>
          What our<br />clients say.
        </div>
        <div className=' tw-flex tw-flex-col xl:tw-flex-row tw-items-center tw-justify-between tw-px-[24px] tw-pt-[64px] sm:tw-px-[72px] sm:tw-pt-[128px]'>
          <div className=' tw-block tw-overflow-hidden tw-w-full sm:tw-w-[504px] tw-h-[432px] tw-rounded-[44px]'>
            <img src="/images/bg/client1.jfif" alt="" className=' tw-h-full tw-object-cover' />
          </div>
          <div className=' tw-max-w-[504px] tw-w-full tw-flex tw-flex-col tw-justify-between xl:tw-mt-0 tw-mt-10'>
            <div className=' tw-text-[#00614F] tw-text-3xl sm:tw-text-4xl tw-leading-[90%] tw-font-[Zen Kaku Gothic Antique] tw-font-semibold'>“SpeakUp has proven itself as a true partner for over 8 years. Their support and knowledge is insightful, quick, and pragmatic.”</div>
            <div className='tw-text-[#222] tw-text-lg tw-leading-[140%] tw-font-Reckless tw-pt-14'>Klaus Schweda, Former Compliance Lead BMW</div>
          </div>
        </div>
        <div className=' tw-flex tw-flex-col xl:tw-flex-row tw-items-center tw-justify-between tw-px-[24px] tw-pt-[64px] sm:tw-px-[72px] sm:tw-pt-[128px]'>
          <div className=' tw-block xl:tw-hidden tw-overflow-hidden tw-w-full sm:tw-w-[504px] tw-h-[432px] tw-rounded-[44px]'>
            <img src="/images/bg/client2.jfif" alt="" className=' tw-h-full tw-object-cover' />
          </div>
          <div className=' tw-max-w-[504px] tw-w-full tw-flex tw-flex-col tw-justify-between xl:tw-mt-0 tw-mt-10'>
            <div className=' tw-text-[#00614F] tw-text-3xl sm:tw-text-4xl tw-leading-[90%] tw-font-[Zen Kaku Gothic Antique] tw-font-semibold'>“SpeakUp is very user friendly for those who want to report misconduct and for those who receive reports.”</div>
            <div className='tw-text-[#222] tw-text-lg tw-leading-[140%] tw-font-Reckless tw-pt-14'>Muel Kaptein, Partner Forensic & Integrity KPMG</div>
          </div>
          <div className=' tw-hidden xl:tw-block tw-overflow-hidden tw-w-[504px] tw-h-[432px] tw-rounded-[44px]'>
            <img src="/images/bg/client2.jfif" alt="" className=' tw-h-full tw-object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
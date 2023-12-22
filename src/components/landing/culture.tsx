/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Welcome () {
  return (
    <div className="tw-bg-[url('/images/bg/culture.jpg')] tw-h-[880px] tw-bg-top tw-bg-no-repeat tw-bg-cover">
      <div className="tw-bg-[url('/images/bg/shape-a-green.svg')] tw-h-[880px] tw-bg-bottom">
        <div className='tw-bg-culture-gradient tw-h-[880px] tw-items-center'>
          <div className=' tw-flex tw-flex-col tw-justify-evenly tw-max-w-[1300px] tw-h-[880px] tw-m-auto sm:tw-p-5 tw-p-0'>
            <div className=' tw-flex tw-justify-start'>
              <div className=' tw-font-Antique tw-text-[2.2rem] sm:tw-text-[4.375rem] tw-text-white tw-max-w-[700px]'>From a compliance culture...</div>
            </div>
            <div className='tw-flex tw-justify-end'>
              <div className=' tw-font-Antique tw-text-[2.2rem] sm:tw-text-[4.375rem] tw-text-white tw-max-w-[700px] tw-text-right'>...to a speak up culture.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/* eslint-disable @next/next/no-img-element */
'use client'

export default function Footer() {
  return (
    <>
      <div className=" tw-block xl:tw-h-[250px]">
        <div className=" tw-flex tw-items-center tw-bg-[#003026] tw-m-auto xl:tw-h-full">
          <div className=" tw-flex tw-flex-col xl:tw-flex-row xl:tw-h-[160px] tw-m-0 tw-w-full xl:tw-w-fit xl:tw-m-auto xl:tw-justify-between tw-p-[30px] sm:tw-p-16 lg:tw-p-32 xl:tw-p-0">
            <div className="xl:tw-w-[500px]">
              <img src="/images/logo.svg" alt="" className=" tw-h-24"/>
            </div>
            <div className="tw-grid xl:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-8 xl:tw-gap-0 tw-pt-8 sm:tw-pt-16 xl:tw-pt-0">
              <div className=" tw-max-w-[340px] tw-flex tw-flex-col tw-text-xl tw-font-bold tw-text-white">
                <div className=" tw-text-[#00B6877D]">Product</div>
                <a href="#">Assurances</a>
                <a href="#">Pricing</a>
                <a href="#">Book a demo</a>
                <a href="#">FAQ</a>
              </div>
              <div className=" tw-max-w-[340px] tw-flex tw-flex-col tw-text-xl tw-font-bold tw-text-white">
                <div className=" tw-text-[#00B6877D]">Company</div>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a href="#">Blog and knowlege</a>
              </div>
              <div className=" tw-max-w-[340px] tw-flex tw-flex-col tw-text-xl tw-font-bold tw-text-white">
                <div className=" tw-text-[#00B6877D]">Support</div>
                <a href="#">+1 (434)214 0851</a>
                <a href="#">support@speakeasy.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-bg-[#003026f8] xl:tw-h-[56px] tw-text-white tw-flex tw-justify-between tw-px-[30px] sm:tw-px-16 lg:tw-px-32 tw-items-center tw-text-xl tw-font-bold">
          <div className=" tw-hidden xl:tw-flex tw-justify-between tw-w-full">
            <div>© 2024 SpeakEasy</div>
            <div className="tw-hidden xl:tw-flex">
              <a href="#">Privacy Statement</a>
              <a href="#" className=" tw-pl-10"></a>
            </div>
          </div>
          <div className="tw-block xl:tw-hidden tw-py-3">
            <div className="tw-flex tw-flex-col tw-pb-12">
              <a href="#">Privacy Statement</a>
              <a href="#"></a>
            </div>
            <div>© 2024 SpeakEasy</div>
          </div>
        </div>
      </div>
    </>
  );
}
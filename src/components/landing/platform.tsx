/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Fab from "@mui/material/Fab";
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Platform () {
  return (
    <div className="tw-bg-[url('/images/bg/platform.jpg')] tw-min-h-[1168px] tw-bg-top tw-bg-no-repeat tw-bg-cover">
      <div className='tw-bg-culture-gradient tw-flex tw-min-h-[1168px] tw-items-center'>
        <div className=' tw-flex tw-flex-col tw-justify-between tw-max-w-[1370px] tw-min-h-[912px] tw-m-auto sm:tw-p-5 tw-p-0'>
          <div className=" tw-max-w-[1248px] tw-flex tw-flex-col tw-justify-center tw-items-center xl:tw-py-0 tw-py-12">
            <div className=" tw-text-center tw-leading-[100%] tw-text-[1.75rem] sm:tw-text-[2.25rem] md:tw-text-[56x] tw-font-sans tw-text-[#00B687]">Join our International Conversation Club now to start your language learning journey.<br /> Meet new friends, learn languages, and explore new cultures. </div>
            <div className=" tw-max-w-[1060px] tw-text-center tw-text-[#00B687] tw-mt-[50px]">Welcome to our Language Platform, where people from different countries come together to practice various languages from scratch. Join our community and engage in group sessions focused on topics that interest you.</div>
          </div>
          <div className=" tw-bg-white tw-rounded-[36px] tw-min-h-[584px] tw-p-3 sm:tw-p-[80px] tw-font-sans tw-flex tw-flex-col tw-justify-between tw-items-center tw-shadow-xl">
            <div className=" tw-flex tw-flex-col xl:tw-flex-row tw-items-center tw-justify-between tw-w-full">
              <div className=" tw-w-[330px]">
                <div className=" tw-text-[#00B687] tw-text-4xl tw-leading-[90%]">Connect with Like-minded Individuals:</div>
                <div className=" tw-pt-9">Meet people from all around the world who share your passion for language learning. Together, you can embark on a language journey, starting from scratch and progressing towards fluency.</div>
              </div>
              <div className=" tw-w-[330px]">
                <div className=" tw-text-[#00B687] tw-text-4xl tw-leading-[90%]">Engage in Meaningful Conversations:</div>
                <div className=" tw-pt-9">Practice your English skills from scratch by discussing topics that truly interest you. Whether it's travel, food, sports, or movies, our club offers a wide range of conversation topics to keep you engaged and motivated.</div>
              </div>
              <div className=" tw-w-[330px]">
                <div className=" tw-text-[#00B687] tw-text-4xl tw-leading-[90%]">Build a Community of Similar Interests:</div>
                <div className=" tw-pt-9">Our club brings together individuals with similar interests, making it easier for you to find language partners who share your passions. You'll have the opportunity to form meaningful connections while improving your language skills.</div>
              </div>
            </div>
            <div className=" tw-w-full tw-flex tw-justify-center tw-py-16 xl:tw-py-0">
              <Fab variant="extended" color="primary">
                About our assurances
                <NavigationIcon sx={{ ml: 1 }} />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
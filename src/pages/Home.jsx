import React from 'react';
import { NavBar, Footer } from '../components/molecules';
import { Text, Image, NavigationButton } from '../components/atoms';
import { Images } from '../constant';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <NavBar />
      <div className='flex-1 flex items-center px-3 justify-center w-full gap-11'>
        <div className='w-[30%] '>
          <Text
            text="Welcome to The System"
            style="
                text-[1.8rem]
                font-semibold
            " 
          />
          <Text 
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis id velit, corporis dolor adipisci"
            style="text-[14px]"
          />
          <NavigationButton 
            name="Find Chatbot"
            type="button"
            style="
              w-[150px]
              h-[30px]
              px-5
              py-3
              mt-3
              bg-[#31ffd7]
              flex
              items-center
              justify-center
              rounded-[4px]
              text-[1rem]
              font-semibold
              hover:bg-slate-900
              hover:text-slate-50
              duration-300
            "
          />
        </div>
        <div>
          <Image 
            src={Images.chatbot}
            href="ChatBot"
            style="
              w-[350px]
              h-[350px]
            "
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;

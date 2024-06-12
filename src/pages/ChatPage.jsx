import React from 'react';
import { NavBar , Footer, Message } from '../components/molecules';
import { IconButton, InputBox } from '../components/atoms';

const ChatPage = () => {
  return (
    <div className='z-30 w-full'>
        <NavBar />
        <div className='flex items-center justify-center h-[90vh] bg-none'>
            <div className='flex flex-col z-50 px-3 h-[60vh] w-1/2 rounded-lg'>
                <div className='w-full h-[50vh] mt-5 overflow-y-auto overflow-x-hidden'>
                    <Message 
                        name="Alok Prasanna"
                        content="Hi, How are you?"
                    />
                    <Message 
                        name="Alok Prasanna"
                        position="left"
                        content="Hi, How are youaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?"
                    />
                    <Message 
                        name="Alok Prasanna"
                        position="left"
                        content="Hi, How are youaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?"
                    />
                    <Message 
                        name="Alok Prasanna"
                        position="left"
                        content="Hi, How are youaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?"
                    />
                    <Message 
                        name="Alok Prasanna"
                        position="left"
                        content="Hi, How are youaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?"
                    />
                    <Message 
                        name="Alok Prasanna"
                        position="left"
                        content="Hi, How are youaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa?"
                    />
                </div>
              <div className='flex items-end justify-center w-full h-[10vh] p-5'>
                <div className='flex items-center justify-center w-full gap-5'>
                    <InputBox 
                        style="
                            w-4/5
                            h-[40px]
                            rounded-md
                            outline-none
                            px-3
                            py-2
                        "
                    />
                    <IconButton 
                        icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            }
                        style="
                        bg-green-500
                        p-2
                        h-[40px]
                        rounded-md
                        hover:bg-green-400
                        "
                    />
                </div>
              </div>
            </div>
            <div className='absolute bg-slate-200 h-[60vh] w-1/2 rounded-lg z-30 opacity-65'></div>
        </div>
        <div className='fixed bottom-0 left-0 w-full'>
            <Footer />
        </div>
    </div>
  )
}

export default ChatPage;

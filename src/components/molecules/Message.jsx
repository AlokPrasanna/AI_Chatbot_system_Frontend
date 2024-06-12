import React from 'react'

const Message = ({name , content , time , position , key}) => {
  return (
    <div key={key} className={`flex items-center ${position === "left" ? "justify-start" : "justify-end"} ml-5 mr-5 mb-3`}>
        <div className={`min-w-[200px] w-fit break-all px-4 py-3 max-w-[65%] text-[14px] rounded-lg ${position === "left" ? "bg-purple-400" : "bg-yellow-400"}`}>
            <span className='font-semibold'>{name}</span>
            <p>{content}</p>
            <span>{time}</span>
        </div>
    </div>
  )
}

export default Message;

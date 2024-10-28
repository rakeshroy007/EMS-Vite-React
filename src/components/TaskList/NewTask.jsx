import React, { useState } from 'react'
import AcceptTask from './AcceptTask';

const NewTask = ({data, onAccept, onReject}) => {

  const [isAccepted, setIsAccepted] = useState(false); 

  // Handle "Yes" button click
  const handleYesClick = () => {
    onAccept()
    setIsAccepted(true);
  };

  return isAccepted ? (
      <AcceptTask 
        data={data} 
        acceptButton={onAccept} 
        rejectButton={onReject} 
      />
    ) : ( 
      
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#8e44ad] rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='px-1 py-2 mt-5 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white font-bold text-sm rounded-full w-[60%]  shadow-lg text-center '>
               New Task Available
            </div>
            <div className='mt-4'>
              <p  className='bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm py-2 px-5 rounded-xl shadow-lg w-[80%]'>
                Is it trusted ?
              </p>
              <button onClick={handleYesClick} className='bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm py-1 px-2 mt-2 mx-3 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[30%]'>
                  Yes 
              </button>
              <button className='bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm py-1 px-2 mt-2 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-[30%]'>
                  No 
              </button>
            </div>
    </div>
  )
}

export default NewTask

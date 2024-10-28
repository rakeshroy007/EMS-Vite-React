import React from 'react'

const AcceptTask = (props) => {
  const {data, acceptButton, rejectButton } = props;
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#16a085] rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-5'>     
                <button onClick={ acceptButton } className='bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold text-sm py-3 px-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>Accept</button>
                <button onClick={ rejectButton } className='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-sm py-3 px-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>Reject</button>
            </div>
    </div>
  )
}

export default AcceptTask

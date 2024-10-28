import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = (props) => {
  const { data: initialData, changeUser } = props

  const [taskCounts, setTaskCounts] = useState(() => {
    const uniqueKey = `taskCounts_emp-${initialData.id}`;
    const storedCounts = JSON.parse(localStorage.getItem(uniqueKey));
    return storedCounts || initialData.taskCounts; // Fallback to initialData.taskCounts
  });

  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    // Load the logged-in user from localStorage on component mount
    const oldLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    const loggedInUserData = oldLoggedInUser.data
    return loggedInUserData || {}
  });


  const uniqueKey = `taskCounts_emp-${loggedInUserData.id}`;

  useEffect(() => {
    if (loggedInUserData?.id) {
      // Update taskCounts for the logged-in user inside employees in localStorage
      updateTaskCountsInLocalStorage(loggedInUserData.id, taskCounts);
    }
  }, [taskCounts, loggedInUserData]);


  const updateTaskCountsInLocalStorage = (userId, taskCounts) => {

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Find the index of the logged-in user by their ID
    const userIndex = employees.findIndex(employee => employee.id === userId);

    if (userIndex !== -1) {
      // Update the taskCounts for this specific user
      employees[userIndex].taskCounts = taskCounts;

      // Save updated employees data back to localStorage
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  };

  // Function to handle when a task is marked as complete
  const handleCompleteButton = () => {
    setTaskCounts((prevCounts) => {
      const updatedCounts = {
        ...prevCounts,
        completed: prevCounts.completed + 1,
        active: prevCounts.active > 0 ? prevCounts.active - 1 : 0,
      };

      localStorage.setItem(uniqueKey, JSON.stringify(updatedCounts));
      updateTaskCountsInLocalStorage(loggedInUserData.id, updatedCounts);

      return updatedCounts;
    });
  };


  // Function to handle when a task is Accepted
  const handleAcceptButton = () => {
    setTaskCounts((prevCounts) => {
      const updatedCounts = {
        ...prevCounts,
        active: prevCounts.active + 1,
        newTask: prevCounts.newTask > 0 ? prevCounts.newTask - 1 : 0,
      }

      localStorage.setItem(uniqueKey, JSON.stringify(updatedCounts));
      updateTaskCountsInLocalStorage(loggedInUserData.id, updatedCounts);

      return updatedCounts;
    });
  };


  // Function to handle when a task is Rejected
  const handleFailedButton = () => {
    setTaskCounts((prevCounts) => {
      const updatedCounts = {
        ...prevCounts,
        failed: prevCounts.failed > 0 ? prevCounts.failed + 1 : 0,
      }

      localStorage.setItem(uniqueKey, JSON.stringify(updatedCounts));
      updateTaskCountsInLocalStorage(loggedInUserData.id, updatedCounts);

      return updatedCounts;
    });
  };


  return (
    <div className='p-10 bg-[#1C1C1C] h-screen' >

      <Header data={initialData} changeUser={changeUser} />
      <TaskListNumbers data={initialData} taskCounts={taskCounts} />
      <TaskList data={initialData} completeButton={handleCompleteButton} acceptButton={handleAcceptButton} rejectButton={handleFailedButton} />

    </div>
  )

  // Check if there are tasks in the task list
  // const hasTasks = initialData.tasks && initialData.tasks.length < 4;          // '3' because in this project we did not play with original employee, so this data is still there...

  // return (
  //   <div className='p-10 bg-[#1C1C1C] h-screen'>
  //     <Header data={initialData} changeUser={changeUser} />
  //     <TaskListNumbers data={initialData} taskCounts={taskCounts} />

  //     {/* Conditionally render the TaskList or a premium message */}
  //     {hasTasks ? (
  //       <TaskList
  //         data={initialData}
  //         completeButton={handleCompleteButton}
  //         acceptButton={handleAcceptButton}
  //         rejectButton={handleFailedButton}
  //       />
  //     ) : (
  //       <div className='flex flex-col items-center justify-center h-full'>
  //         <h2 className='text-4xl font-bold text-white mb-4'>No Tasks Available</h2>
  //         <p className='text-lg text-gray-300'>
  //           Enjoy the premium experience! You don't have any tasks at the moment.
  //         </p>
  //         <div className='mt-6'>
  //           <button className='bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition duration-300'>
  //             Explore Premium Features
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default EmployeeDashboard

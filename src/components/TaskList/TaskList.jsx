import React, {useEffect, useState} from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


function TaskList(props) {
  const { data, completeButton, acceptButton, rejectButton } = props

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

    // Find tasks for the current user
    const currentEmployee = storedEmployees.find(emp => emp.id === data.id);
    const userTasks = currentEmployee ? currentEmployee.tasks : loggedInUser.data.tasks;

    setTasks(userTasks || []); // Initialize tasks with localStorage data
  }, [data.id]);            // Re-run this if `data.id` changes (in case of switching users)


  const updateLocalStorageTasks = (updatedTasks, employeeId) => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = storedEmployees.map(emp =>
      emp.id === employeeId ? { ...emp, tasks: updatedTasks } : emp
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };


  const updateLoggedInUser = (updatedTasks) => {
    const loggedInUserData = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    const updatedUserData = { ...loggedInUserData, data: { ...loggedInUserData.data, tasks: updatedTasks }};
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
  };

  // Update the handleYesButton function to immediately save accepted status
  const handleYesButton = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) =>
        t.id === taskId ? { ...t, newTask: false, active: true, failed: false,completed: false } : t
      );
      updateLocalStorageTasks(updatedTasks, data.id);
      updateLoggedInUser(updatedTasks);
      return updatedTasks
    });
  };

  const handleNoButton = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };

  // Update the handleAcceptButton to persist the completed state
  const handleAcceptButton = (eachTaskData) => {
    acceptButton()
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((t) =>
        t.id === eachTaskData.id ? { ...t, completed: true, active: false, failed: false, newTask: false } : t
      );
      updateLocalStorageTasks(updatedTasks, data.id);
      updateLoggedInUser(updatedTasks);
      return updatedTasks;
    });
  };
  
 // Function to handle reject task (remove it)
 const handleRejectButton = (eachTaskData) => {
  rejectButton();
  setTasks((prevTasks) => {
    const updatedTasks = prevTasks.map((t) =>
      t.id === eachTaskData.id ? { ...t, completed: false, active: false, failed: true, newTask: false } : t
    );
    updateLocalStorageTasks(updatedTasks, data.id);
    updateLoggedInUser(updatedTasks);
    return updatedTasks;
  });
};

  // Handle task completion
  const handleCompleteButton = (eachTaskData) => {
    completeButton();
    setTasks((prevTasks) => {
      // Filter out the completed task by ID
      const updatedTasks = prevTasks.filter((t) => t.id !== eachTaskData.id);
  
      // Update localStorage with the updated tasks
      updateLocalStorageTasks(updatedTasks, data.id);
      updateLoggedInUser(updatedTasks);
  
      return updatedTasks; // Update the state with tasks excluding the completed task
    });
  };

  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
    
        {tasks.map((elem, idx) => {
            if(elem.active){
                return <AcceptTask key={idx} data={elem} acceptButton={() => handleAcceptButton(elem)}  rejectButton={() => handleRejectButton(elem)} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} onAccept={() => handleYesButton(elem.id)}  onReject={() => handleNoButton(elem.id)} />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} completeButton={() => handleCompleteButton(elem)} />
            }
            if(elem.failed){            
                return <FailedTask key={idx} data={elem} />
            }
            return null
        })}
    </div>
  )
}

export default TaskList
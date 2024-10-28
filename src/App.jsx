import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [usersData, setUsersData] = useContext(AuthContext)

  useEffect(() => {
    const loggedinuserData = localStorage.getItem("loggedInUser")

    if (loggedinuserData) {
      const userData = JSON.parse(loggedinuserData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {

      const admin = localStorage.getItem("admin")
      setUser('admin')
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: (admin) }))

    }
    else if (usersData) {
      const employee = usersData.find((e) => email == e.email && password == e.password)

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)

        // Check if taskCounts already exist in localStorage, otherwise set default values
        const uniqueKey = `taskCounts_emp-${employee.id}`;
        const existingTaskCounts = localStorage.getItem(uniqueKey);
        if (!existingTaskCounts) {
          localStorage.setItem(uniqueKey, JSON.stringify(employee.taskCounts) || { newTask: 0, completed: 0, active: 0, failed: 0 });
        }

        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : null)}

    </>
  )
}

export default App

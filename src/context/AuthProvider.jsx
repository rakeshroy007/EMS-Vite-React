import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage, defaultData } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  
  // localStorage.clear()

  const [usersData, setUsersData] = useState([])

  useEffect(() => {

    const { employees } = getLocalStorage();

    if (!employees || employees.length === 0) {
      setLocalStorage(defaultData);
      setUsersData(defaultData);
    } else {
      setUsersData(employees);
    }
  }, []);

  useEffect(() => {
    if (usersData.length > 0) {
      setLocalStorage(usersData);
    }
  }, [usersData]);


  return (
    <div>
      <AuthContext.Provider value={[usersData, setUsersData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

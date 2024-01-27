import React, { useState, useEffect } from 'react'
import getAllUsers from "../api/users/getAllUsers";

const Users = () => {

     const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getUsers();
  }, [])

  console.log('users: ', users);



  const getUsers = async () => {
    const allUsers = await getAllUsers();
    if (allUsers) {
      setUsers(allUsers);
    }
  }

    return (
        <div>
            { users && (
                users.map((user) => {
                    return (
                        <p>{user.email}</p>
                    )
                })
            )}
        </div>
    )
}

export default Users;
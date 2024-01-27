import React, { useEffect, useState } from 'react'
import getAllUsers from '../api/users/getAllUsers'
import Users from '../components/Users'

const Home = () => {
 
  return (
    <div>
     <Users />

    </div>
  )
}

export default Home
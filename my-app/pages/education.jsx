import React from 'react'
import {user} from "./index"
import EducationCard from "../Components/educationCard"

const Education = () => {
  console.log(user)
  return (
    <div>
      <h1>This is Education Page</h1>
      <EducationCard {...user}/>
    </div>
  )
}

export default Education
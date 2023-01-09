import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const EducationCard = (user) => {
  return (
    <div >
      <Grid templateColumns='repeat(5, 1fr)' gap={6} >
      <GridItem w='100%' h='10' bg='blue.500'>{user.company}</GridItem>
      <GridItem w='100%' h='10' bg='blue.500'>{user.location}</GridItem>
      <GridItem w='100%' h='10' bg='blue.500'>{user.bio}</GridItem>
      <GridItem w='100%' h='10' bg='blue.500'>{user.name}</GridItem>
   </Grid>
    </div>
  )
}

export default EducationCard
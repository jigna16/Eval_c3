import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Projects from '../Components/projects'

const Project = ({project}) => {
  console.log(project)
  return (
    <Box w={"100%"} p={"10px"}>

      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
             {
                 project?.items.map((el)=>{
                  return <Projects key={el.id} {...el}/>
                 })
             }
      </Grid>

    </Box>
  )
}

export async function getServerSideProps(){
  let res=await fetch("https://api.github.com/search/repositories?q=user:jigna16+fork:true&sort=updated&per_page=10&type=Repositories")
  let data=await res.json()
  return{
   props:{
     project:data
   }
  }
}

export default Project
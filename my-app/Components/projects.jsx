import { Grid, GridItem, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const Projects = (project) => {
  return (
    <div>
       <Grid border={"1px solid black"}>
        <Link href={`${project.html_url}`}>
          <Heading>{`${project.name}`}</Heading>
        </Link>
        <GridItem>{`${project.forks}`}</GridItem>
        <GridItem>{`${project.open_issues}`}</GridItem>
        <GridItem>{project.language}</GridItem>
       </Grid>
    </div>
  )
}

export default Projects
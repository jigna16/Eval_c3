import { Box, Heading, Stack, StackDivider, VStack } from '@chakra-ui/react'
import {user} from "./educationCard"
import { Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const MyIntro = (user) => {
  return (
    <div>
      <Heading>This is Intro Page</Heading>
        <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
  border={"1px solid blue"}
>

<Box boxSize='sm'>
  <Image src={user.avatar_url} alt='Dan Abramov' />
</Box>
  <Box h='40px' bg='yellow.200'>
    {user.company}
  </Box>
  <Box h='40px' bg='tomato'>
    {user.name}
  </Box>
  <Box h='40px' bg='pink.100'>
    {user.bio}
  </Box>
  <Box h='40px' bg='pink.100'>
    {user.location}
  </Box>
  <Box h='40px' bg='pink.100'>
  TYPESCRIPT | 
REACT.JS | 
NODE.JS | 
GIT | 
REACTNATIVE | 
CHAKRA-UI | 
CSS | 


  </Box>

<div>
  <Stack direction='row' spacing={4} align='center' justifyContent={"space-between"}>
  <Button colorScheme='teal' variant='solid'>
    Follow
  </Button>
 
  <Button colorScheme='teal' variant='solid'>
    Resume
  </Button>
 
</Stack>
</div>
</VStack>

    </div>
  )
}

export default MyIntro
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px", padding:"15px", backgroundColor:"red"}}>
      <Link href="/">Home</Link>
      <Link href="/project">Project</Link>
      <Link href="/education">Education</Link>


    </div>
  )
}

export default Navbar
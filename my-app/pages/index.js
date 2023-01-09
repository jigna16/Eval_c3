import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import MyIntro from '../Components/myIntro'
import Education from './education'
import Projects from '../Components/projects'

const inter = Inter({ subsets: ['latin'] })
 export const user={
  "login": "jigna16",
  "id": 105915946,
  "node_id": "U_kgDOBlAmKg",
  "avatar_url": "https://avatars.githubusercontent.com/u/105915946?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jigna16",
  "html_url": "https://github.com/jigna16",
  "followers_url": "https://api.github.com/users/jigna16/followers",
  "following_url": "https://api.github.com/users/jigna16/following{/other_user}",
  "gists_url": "https://api.github.com/users/jigna16/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jigna16/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jigna16/subscriptions",
  "organizations_url": "https://api.github.com/users/jigna16/orgs",
  "repos_url": "https://api.github.com/users/jigna16/repos",
  "events_url": "https://api.github.com/users/jigna16/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jigna16/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jyoti kumari",
  "company": "Masai School",
  "blog": "",
  "location": "Delhi",
  "email": null,
  "hireable": null,
  "bio": "Aspiring MERN Stack Developer",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 91,
  "following": 88,
  "created_at": "2022-05-20T09:11:24Z",
  "updated_at": "2023-01-02T15:47:02Z"
}

export default function Home({project}) {
  

  return (
    <>
    <div style={{display:"grid", gridTemplateColumns:"repeat(300px,1fr)" ,gap:"10px" }} >
     {
      project?.items.map((el)=>{
        return <Projects key={el.id} {...el} />
      })
     }
      </div>
       <MyIntro {...user}/>
       <Education {...user}/>
      
    </>
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




import { useEffect, useState } from "react"
import { getUser, getUsers } from "../api/api"
import { CustomerContent } from "./customer_content"

export const MainPage = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const getusers = async() => {
      let res = await getUsers()
      setUsers(res)
    }

    getusers()
  },[])

  const handleUserClick = async (user) => {
    if (user.id) {
      let res = await getUser(user.id)
      if (res) {
        setUser(res)
      }
    }
  }


  return (
    <>
      <div class='text-center'>Raven Handpoke Tattoo</div>
      <div class='flex flex-row gap-10x p-10 gap-5 h-full'>
        <div class='bg-white w-1/5 rounded-md shadow-md p-5 overflow-scroll'>
        {
        users.filter((e) => e.id).map((user) => 
        <button
        class='w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50 my-2 '
        onClick={(e) => handleUserClick(user)}
        >
          {user.name ?? 'nop'}</button>)
      } 

        </div>
        <div class='flex-1  min-h-full overflow-scroll'>
          {user ? <CustomerContent customer={user} /> : 'Clique sur un client ;)'}
          
        </div>
      </div>
  </>

  )
}
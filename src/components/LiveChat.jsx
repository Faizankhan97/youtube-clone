import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeGenerateMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState()
  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const i = setInterval(() => {

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeGenerateMessage(25)
      }))
    }, 2000)

    return () => clearInterval(i)
  }, [])
  return (
    <div className='ml-2'>
      <div className='p-2 flex flex-col-reverse h-[400px] overflow-y-scroll bg-slate-100 rounded-lg border border-black w-full '>
        {chatMessages.map((chats, index) => (<ChatMessage key={index} name={chats.name} message={chats.message} />))}
      </div>
      <form className='flex rounded-lg border border-black p-2 mt-1' onSubmit={(e) => {
        e.preventDefault()
        dispatch(addMessage({
          name: "Faizan",
          message: liveMessage
        }))
        setLiveMessage('')
      }}>
        <input type="text" className='w-full p-1' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
        <button className='px-2 mx-2 bg-green-100 rounded-lg'>Send</button>
      </form>
    </div>
  )
}

export default LiveChat
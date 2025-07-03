import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='ml-2 p-2 h-[600px] bg-slate-100 rounded-lg border border-black w-full'>
        <ChatMessage name="Faizan" message="New Chat Message" />
    </div>
  )
}

export default LiveChat
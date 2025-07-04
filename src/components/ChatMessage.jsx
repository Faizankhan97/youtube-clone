import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center mb-3'>
      <img src="https://yt4.ggpht.com/ytc/AIdro_kujDzpidx0xqoOy1SlZFedaPAkyn4X-8-RhqSoJ6c=s32-c-k-c0x00ffffff-no-rj" className='h-8' alt="user" />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage
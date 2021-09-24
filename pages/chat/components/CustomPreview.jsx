import { UserIcon } from '@heroicons/react/outline';
import React, {useState, useEffect} from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelPreviewUIComponentProps, useChatContext } from 'stream-chat-react';
// import './CustomPreview.scss';


export const CustomPreview = (props) => {
  const { channel, setActiveChannel } = props;
  const client = StreamChat.getInstance('w8twbsn7nmpz');
  const [userName, setuserName] = useState('')
  const [tone, setTone] = useState('/Messenger.mp3')
  console.log(client.user.id)
  

  const { channel: activeChannel } = useChatContext();

  const selected = channel?.id === activeChannel?.id;

  const renderMessageText = () => {
    const lastMessageText = channel.state.messages[channel.state.messages.length - 1].text;

    const text = lastMessageText || 'message text';

    return text.length < 60 ? lastMessageText : `${text.slice(0, 70)}...`;
  };
  console.log(channel)
  const member = Object.entries(channel.state.members)
  // console.log(member)

  let unreadCount = channel.state.unreadCount;
  let isTyping = channel.state.isTyping;
  console.log(unreadCount)

  // 9
 
  useEffect(() => {
    if(client.user.id === member[0][0]){
        setuserName(member[1][1].user.name)
    }else if(client.user.id === member[1][0]){
        setuserName(member[0][1].user.name)
    }
  }, [])
  
  if (!channel.state.messages.length) return null;


  return (
    <>
    <div
      className={`${selected ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : ''} w-full bg-gray-100 mb-2 p-2 rounded-2xl`}
      onClick={() => setActiveChannel(channel)}
    >
    
      <div className='flex space-x-3'>
        <div className={`${selected ? 'bg-white text-green-500' : 'bg-gradient-to-r from-green-400 to-green-600 text-white'} flex items-center justify-center h-12 w-12 rounded-full`}><UserIcon className="h-6 w-6"/></div>
        <div className="">
        <div className=''>
          <p className=''>{userName || 'User'}</p>
          <p className=''>{channel.data?.subtitle}</p>
        </div>
        {
          isTyping? "Typing..." : <p className={`${selected? 'text-gray-100' :'text-sm text-gray-500'}`}>{renderMessageText()}</p>
        }
        </div>
        {
          unreadCount ? <div className="flex justify-end flex-grow">
          <p className={`${selected?" text-green-500 rounded-full bg-white":"text-white rounded-full bg-green-500"} flex items-center justify-center font-bold h-5 w-5 text-sm`}>{unreadCount}</p>
         </div> : ''
        }
        
      </div>
      
    </div>
    
    </>
  );
};
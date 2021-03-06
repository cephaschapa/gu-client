import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import BottomNavBar from '../../components/BottonNavBar'
import Header from '../../components/Header'
import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Attachment,
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChannelStateContext,
  TypingIndicator
} from 'stream-chat-react';


import  CustomPreview  from '../../components/CustomPreview'
import Header2 from '../../components/Header2'

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2EwMjM5MjU4YWZjM2Y3Yjc2N2ZhMGY0ZWRlZmQzMTMifQ.mFNrC9ZjUU_R4HiW6p1dyr_0qJIXrBRfGpVGrRQJ_4A';

const filters = { type: 'messaging', members: { $in: ['small-heart-9'] } };
const sort = { last_message_at: -1 };

const attachments = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/71k0cry-ceL._SL1500_.jpg',
    name: 'iPhone',
    type: 'product',
    url: 'https://goo.gl/ppFmcR',
  },
];

const CustomAttachment = (props) => {
  const { attachments } = props;
  const [attachment] = attachments || [];

  if (attachment?.type === 'product') {
    return (
      <div style={{display:"none"}}>
        Product:
        <Link href="store/">
          <div>
            {/* < alt='custom-attachment' height='100px' src={attachment.image} /> */}
            <br />
            {attachment.name}
          </div>
        </Link>
      </div>
    );
  }

  return <Attachment {...props} />;
};


function ChatHome() {
  const [chatClient, setChatClient] = useState(null);
  const [filters, setFilters] = useState();
  const [scrollY, setScrollY] = useState(0);
  const {channel} = useChannelStateContext();

  console.log(channel)

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
      console.log(scrollY);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('w8twbsn7nmpz');

      await client.connectUser(
        {
          id: 'ca0239258afc3f7b767fa0f4edefd313',
          name: 'jay',
          image: '',
        },
        userToken,
      );
      console.log(client.user);
      // const channels = await client.queryChannels(filters, sort, options);
      const filters = { type: 'messaging', members: { $in: [client.userID] } };
      setFilters(filters);
      const [channelResponse] = await client.queryChannels(filters, sort);


      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }
    return (
        <div className="flex justify-center items-center h-screen main w-full">
            <Head>
                <title>Greenupp | Chat</title>
                <meta name="description" content="Greenupp" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
           <Header2 />
            <section className="w-full m-0 p-0">
            <Chat client={chatClient} theme='messaging light'>
             
            <ChannelList Preview={CustomPreview} filters={filters} sort={sort} setActiveChannelOnMount showChannelSearch/>
            
            <Channel Attachment={CustomAttachment}>
                <Window>
                {/* <header className="h-12 w-full bg-white border-b border-gray-300">
                  <TypingIndicator />
                </header> */}
                <ChannelHeader />
                <MessageList />
                <div className="border-t border-gray-300" >
                  <MessageInput/>
                </div>
                </Window>
                <Thread />
            </Channel>
                
            </Chat>
            </section>
            <nav className="">
                {/* <BottomNavBar /> */}
            </nav> 
        </div>
    )
}

export default ChatHome

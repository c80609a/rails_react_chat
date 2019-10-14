import React from 'react'
import { ChatList, ChatRoom } from 'components'

class ChatPage extends React.Component {
  render() {
    return (
      <div> <ChatList /> <ChatRoom /> </div>
    )
  }
}


export default ChatPage

import React , {useState} from 'react'
import SendForm from '../../components/messages/SendToForm'

function MessageStudent() {
    const [message, setmessage] = useState("");
    const [recipient, setrecipient] = useState("");
    const [ recipientOptions, setrecipientOptions] = useState([])
    const sender = ""

    const onSend = () => {
          
    }

    return (
      <div>
         <SendForm 
            message={message} 
            setmessage={setmessage} 
            onSend={onSend} 
            recipientsOptions={recipientOptions} 
            recipient={recipient} 
            sendto="Teacher"
            setrecipient={setrecipient} 
            sender={sender}/> 
     </div>
    )
}

export default MessageStudent
import { Fragment, useState } from "react"
import {findAllMesages} from './MessageService'
import MessageDetail from "./MessageDetails";
import SortMessage from "./SortMessage";

function Message()
{
    //stateful variable using useState hook
   const [messages,setMessages] = useState(findAllMesages()); 

   function deleteMessage(id)
   {
    setMessages(messages.filter(m => m.id != id));
   }

   function sortMessages(criteria)
   {
    if(criteria === 'ASC')
        {
          messages.sort((m1,m2) => m1.id - m2.id)
          //alert(criteria)
        }
        else if(criteria === 'DESC')
        {
            messages.sort((m1,m2) => m2.id - m1.id)
           // setMessages(messages)
            //alert(criteria)
        }
        setMessages([...messages])
   }

   //we are returning JSX (html + JS)
   return (
    <Fragment>
    <button onClick={()=> {setMessages(findAllMesages())}}>refresh Messages</button>
    <SortMessage sort={sortMessages}></SortMessage>
   
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            messages.length>0 &&
            /*
                MessageDetail is child  of Message 
                we are using props to pass data from parent to child 
                property name is userdefined

                we are using function props to pass data from child to parent
            */
            messages.map(m => <MessageDetail msg={m} delete={deleteMessage}></MessageDetail>) 
            
        } 
        </tbody>
    </table>
    </Fragment>
   ) 
}

export default Message

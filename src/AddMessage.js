import { Fragment, useState } from "react"
import {save} from './MessageService'
const AddMessage = () => {

    const [message,setMessage] = useState({id:0,name:''})

    function addMessage(e)
    {
        e.preventDefault();//DON'T submit the form
        save(message)   //invoking save from service module
        
    }

    return (
        <Fragment>
            <form onSubmit={addMessage}>
                <input type="text" name="id" onChange={(ev)=> { setMessage({...message,id:parseInt(ev.target.value)}) } } />
                <input type="text" name="name" onChange={(ev)=> {setMessage({...message,name:ev.target.value})} }/>
                <input type="submit" value="Add"/>
            </form>
        </Fragment>
    )
}

export default AddMessage
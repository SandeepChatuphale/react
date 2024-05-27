//props are passed by parent component
const MessageDetail = (props) =>{

    function deleteById()
    {
        const result = window.confirm('Are you sure?')

        if(result)
            props.delete(props.msg.id)
    }

    return (
        <tr>
           <td>{props.msg.id}</td>
           <td>{props.msg.name}</td>
           <td><button onClick={deleteById}>Delete</button> </td>

           <td><button onClick={()=> { 
                                        const result = window.confirm('Are you sure?')
                                        if(result)
                                            props.delete(props.msg.id)
                                     }
                                }>Delete</button> </td>
         </tr>
    )
}

export default MessageDetail
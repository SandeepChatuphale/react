let messages = [{"id": 1,"name": "Good Morning"},{"id": 2,"name": "Good Evening"}]
//let messages = []

function findAllMesages()
{
    return messages
}

function save(m)
{
    messages = [...messages,m]
    console.log(messages)
}

export {findAllMesages, save}
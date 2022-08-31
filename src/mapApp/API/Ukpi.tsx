import React, { useEffect, useState } from "react"

// const api_url = 'https://jsonplaceholder.typicode.com/users';
const api_url = 'https://landregistry.data.gov.uk/def/ukhpi/.json';

function AppApi() {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch(api_url)
    const data = await response.json()
    console.log(data);
    setUsers(data)
}

  useEffect(() => {
    fetchData()
  }, [])


  
  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AppApi
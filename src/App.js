import React from 'react';

const App = () => {
  const [users, setUsers] = React.useState([
    {
      name: "satou",
      age: 25,
      email: "sat@gmail.com"
    },
    {
      name: "abe",
      age: 40,
      email: "hiroshi@yahoo.co.jp"
    }
  ])
  return (
    <>
      {
        users.map((user, index)=>(
          <>
            <p>名前 : {user.name}</p>
            <p>年齢 : {user.age}</p>
            <button onClick={()=>{
              const newUsers = users.slice()
              newUsers[index].age -= 1
              setUsers(newUsers)
            }}>-</button>
            <button onClick={()=>{
            const newUsers = users.slice()
            newUsers[index].age += 1
            setUsers(newUsers)

            }}>+</button>
            <p>メール : {user.email}</p>
            <hr />
          </>
        ))
      }
    </>
  )
}


export default App;

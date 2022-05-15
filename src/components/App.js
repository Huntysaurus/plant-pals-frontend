import React, { useEffect, useState } from "react";
import Users from "./User"


function App() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(data => setUsers(data));
    }, [])

    return (
        <>
            <h1>this is in the App</h1>
            <Users people={users}/>
        </>
    )
}

export default App;
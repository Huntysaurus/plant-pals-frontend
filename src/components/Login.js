import React, { useState } from "react";
import UserForm from "./UserForm";
import styles from "../appStyles.module.css";

function Login({ onHandleLogin, onCreateUser, allUsers }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault()
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(users => {
            const foundUser = users.find((user) => {
                    return user.password === password && user.username === username
            })

            foundUser ? onHandleLogin(foundUser) : alert('user not found')
        })
    }

    return (
        <div className={styles.login_container}>
        <br></br>
            <h2 className={styles.login_heading}>Login Here!</h2>
            <form onSubmit={handleLogin}>
                <label>
                    username:
                    <input
                        placeholder="username here"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    password:
                    <input
                        placeholder="password here"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <br></br>
                <button type="submit">login</button>
            </form>
            <br></br>
            <br></br>
            <UserForm
                onCreateUser={onCreateUser}
                allUsers={allUsers}
            />
        </div>
    )
}

export default Login

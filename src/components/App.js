import React, { useEffect, useState } from "react";
import PlantPage from "./PlantPage";
import PlantForm from "./PlantForm";
import Home from "./Home";
import Login from "./Login";


function App() {

    const [plantData, setPlantData] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/plants")
        .then((r) => r.json())
        .then(data => setPlantData(data))
    }, [])

    function handleUserLogin(userData) {
        setUser(userData)
        setLoggedIn(true)
        console.log(userData)
    }

    function handleAddPlant(newPlantData) {
        console.log(user)
        setPlantData([...plantData, newPlantData])
    }

    function handleDeletePlant(id) {
        const updatedPlants = plantData.filter(plant => plant.id !== id)
        setPlantData(updatedPlants)
    }

    function handleLogoutClick() {
        setUser(false)
        setLoggedIn(false)
    }
    return (
        <>
            <h1>Plant Pals</h1>
            {loggedIn ? (
                <>
                    <h2>Welcome back {user.name}!</h2>
                     <button onClick={handleLogoutClick}>logout</button>
                    <PlantForm
                        user={user}
                        onAddPlant={handleAddPlant}/>
                    <PlantPage 
                        plants={plantData}
                        onDeletePlant={handleDeletePlant}
                    />
                </>
            ) : (
                <>
                    <Home/>
                    <Login onHandleLogin={handleUserLogin}/>
                </>
            )}
        </>
    )
}

export default App;
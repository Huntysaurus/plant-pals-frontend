import React, { useEffect, useState } from "react";
import PlantPage from "./PlantPage";
import PlantForm from "./PlantForm";
import Home from "./Home";
import Login from "./Login";


function App() {

    const [plantData, setPlantData] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/plants")
        .then((r) => r.json())
        .then(data => setPlantData(data));
    }, [])

    function handleAddPlant(newPlantData) {
        setPlantData([...plantData, newPlantData])
    }

    function handleDeletePlant(id) {
        const updatedPlants = plantData.filter(plant => plant.id !== id)
        setPlantData(updatedPlants)
    }
    return (
        <>
            <h1>Plant Pals</h1>
            {loggedIn ? (
                <>
                    <PlantForm onAddPlant={handleAddPlant}/>
                    <PlantPage 
                        plants={plantData}
                        onDeletePlant={handleDeletePlant}
                    />
                </>
            ) : (
                <>
                    <Home/>
                    <Login/>
                </>
            )}
        </>
    )
}

export default App;
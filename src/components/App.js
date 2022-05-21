import React, { useEffect, useState } from "react";
import PlantPage from "./PlantPage";


function App() {

    const [plantData, setPlantData] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/plants")
        .then((r) => r.json())
        .then(data => setPlantData(data));
    }, [])

    return (
        <>
            <h1>this is in the App</h1>
            <PlantPage plants={plantData}/>
        </>
    )
}

export default App;
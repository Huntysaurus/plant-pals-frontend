import React from "react";
import { useState } from "react";
import styles from "../appStyles.module.css";

function PlantForm({ onAddPlant, user }) {

    const [plantName, setPlantName] = useState('')
    const [plantImage, setPlantImage] = useState('')
    const [plantDescription ,setPlantDescription] = useState('')
    const [plantLight, setPlantLight] = useState('direct sunlight')
    const [plantCare, setPlantCare] = useState('beginner friendly')
    const [plantAge, setPlantAge] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        alert("plant added to the list!")
        fetch("http://localhost:9292/plants" , {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name: plantName,
                image: plantImage,
                description: plantDescription,
                light_preference: plantLight,
                care_difficulty: plantCare,
                age: plantAge,
                user_id: user.id
            }),
        })
        .then((r)=> r.json())
        .then((newPlant) => {
            onAddPlant(newPlant)
            setPlantName('')
            setPlantImage('')
            setPlantDescription('')
            setPlantLight('direct sunlight')
            setPlantCare('beginner friendly')
            setPlantAge(0)
        })
    }

    return (
        <div className={styles.plant_form}>
            <h2>Add Your Plant to the List!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Picture:
                    <input
                        placeholder='link your plant photo'
                        value={plantImage}
                        onChange={(e)=>setPlantImage(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Plant Variety:
                    <input
                        placeholder='what type of plant is it?'
                        value={plantName}
                        onChange={(e)=>setPlantName(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Plant Description:
                    <input
                        placeholder='tell us about your plant!'
                        value={plantDescription}
                        onChange={(e)=> setPlantDescription(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Plant Age:
                    <input
                        type='number'
                        placeholder='how old is your plant?'
                        value={plantAge}
                        onChange={(e)=> setPlantAge(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Light Preference:
                    <select
                        placeholder='plant light preference'
                        value={plantLight}
                        onChange={(e)=>setPlantLight(e.target.value)}
                    >
                        <option value="direct sunlight">direct sunlight</option>
                        <option value="indirect bright light">indirect bright light</option>
                        <option value="indirect medium light">indirect medium light</option>
                        <option value="low light">low light</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Care Difficulty:
                    <select
                        placeholder='care difficulty'
                        value={plantCare}
                        onChange={(e)=>setPlantCare(e.target.value)}
                    >
                        <option value="beginner friendly">beginner friendly</option>
                        <option value="advanced care">advanced care</option>
                        <option value="quite finicky">quite finicky</option>
                    </select>
                </label>
                <br></br>
                <button type="submit">Add Plant!</button>
            </form>

        </div>
    )
}

export default PlantForm

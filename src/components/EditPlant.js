import React, { useState } from "react";
import styles from "../appStyles.module.css";

function EditPlant({ plantImage, plantDescription, plantAge, plantName, id, onUpdatePlant}) {

    const [newImage, setNewImage] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newAge, setNewAge] = useState(0)

    function handleUpdateSubmit(e) {
      e.preventDefault()

      console.log({"image": newImage, "description": newDesc, "age": newAge})
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "image": newImage === "" ? plantImage : newImage,
                "description": newDesc === "" ? plantDescription : newDesc,
                "age": newAge === 0 ? plantAge : newAge
            }),
        })
            .then((r) => r.json())
            .then((updatedPlant) => onUpdatePlant(updatedPlant))
    }

    return (
        <div className={styles.edit_plant_div}>
        <img className={styles.plant_image} src={plantImage} alt={plantName}></img>
        <form onSubmit={handleUpdateSubmit} >
            <label>
                    New Plant Picture:
                    <input
                        placeholder={plantImage}
                        value={newImage}
                        onChange={(e)=>setNewImage(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                   New Plant Description:
                    <textarea
                        placeholder={plantDescription}
                        value={newDesc}
                        onChange={(e)=> setNewDesc(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                   New Plant Age:
                    <input
                        type='number'
                        placeholder={plantAge}
                        value={newAge}
                        onChange={(e)=> setNewAge(e.target.value)}
                    />
                </label>
                <br></br>
                <button className={styles.confirm_button} type="submit" value="update">Confirm Changes</button>
        </form>
        </div>

    )

}

export default EditPlant
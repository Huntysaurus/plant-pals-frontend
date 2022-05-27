import React, { useState } from "react";

function EditPlant({ plantImage, plantName, id, plantDescription, onUpdatePlant}) {

    console.log(id)

    const [newImage, setNewImage] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newAge, setNewAge] = useState('')

    function handleUpdateSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                plantImage: newImage,
                plantDescription: newDesc,
                age: newAge
            }),
        })
            .then((r) => r.json())
            .then((updatedPlant) => onUpdatePlant(updatedPlant))
    }

    return (
        <>
        <img style={{marginLeft:"25%", marginRight:"auto", marginBottom:"1%"}} src={plantImage} alt={plantName}></img>
        <form onSubmit={handleUpdateSubmit} style={{marginLeft:"25%", marginRight:"auto", marginBottom:"1%"}}>
            <label>
                    New Plant Picture:
                    <input
                        placeholder='new plant photo'
                        value={newImage}
                        onChange={(e)=>setNewImage(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                   New Plant Description:
                    <input
                        placeholder='change the info'
                        value={newDesc}
                        onChange={(e)=> setNewDesc(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                   New Plant Age:
                    <input
                        placeholder='how old is your plant now?'
                        value={newAge}
                        onChange={(e)=> setNewAge(e.target.value)}
                    />
                </label>
                <br></br>
                <button type="submit" value="update">Update Plant</button>
        </form>
        </>

    )

}

export default EditPlant
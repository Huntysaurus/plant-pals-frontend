import React, { useState } from "react";

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
        <>
        <img style={{marginLeft:"25%", marginRight:"auto", marginBottom:"1%"}} src={plantImage} alt={plantName}></img>
        <form onSubmit={handleUpdateSubmit} style={{marginLeft:"25%", marginRight:"auto", marginBottom:"1%"}}>
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
                    <input
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
                <button type="submit" value="update">Update Plant</button>
        </form>
        </>

    )

}

export default EditPlant
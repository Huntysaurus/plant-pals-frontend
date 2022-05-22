import React from "react";
import PlantCard from "./PlantCard";

function PlantPage({ plants }) {

    console.log(plants)

    return (
        <>
            <h2>
                <button>sort by difficulty</button>
                <button>sort alphabetically</button>
                <button>only show alive</button>
                <button>sort by flowering</button>   
            </h2>

            <div>
                {plants.map((plant) => {
                    return (
                        <ul key={plant.id}>
                            <PlantCard plantName={plant.name}/>
                        </ul>
                    )
                })}
            </div>
        </>
    )

}

export default PlantPage
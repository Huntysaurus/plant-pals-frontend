import React from "react";
import PlantCard from "./PlantCard";

function PlantPage({
    plants,
    onDeletePlant,
    user
}) {

    console.log(user.plants)

    return (
        <>
            <h2>
                <button>sort by difficulty</button>
                <button>sort alphabetically</button>
                <button>only show alive</button>
                <button>sort by flowering</button>   
            </h2>

            <div>
                <ul>
                    {plants.map((plant) => {
                        return (
                            <PlantCard
                            key={plant.id}
                            id={plant.id}
                            plantName={plant.name}
                            plantImage={plant.image}
                            plantDescription={plant.description}
                            plantLight={plant.light_preference}
                            plantCare={plant.care_difficulty}
                            plantAge={plant.age}
                            onDeletePlant={onDeletePlant}
                            />
                        )
                    }
                    )}
                </ul>
            </div>
        </>
    )

}

export default PlantPage
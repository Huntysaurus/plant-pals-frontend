import React from "react";
import PlantCard from "./PlantCard";

function PlantPage({
    plants,
    onDeletePlant,
    onUpdatePlant,
    user
}) {

    
    return (
        <>
            <div>
                <ul>
                    {plants.map((plant) => {
                        return (
                            <PlantCard
                            user={user}
                            key={plant.id}
                            id={plant.id}
                            plantName={plant.name}
                            plantImage={plant.image}
                            plantDescription={plant.description}
                            plantLight={plant.light_preference}
                            plantCare={plant.care_difficulty}
                            plantAge={plant.age}
                            plantOwner={plant.user_id}
                            onDeletePlant={onDeletePlant}
                            onUpdatePlant={onUpdatePlant}
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
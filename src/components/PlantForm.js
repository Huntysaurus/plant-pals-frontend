import React from "react";

function PlantForm() {

    return (
        <>
            <h2>Fill out info about plant</h2>
            <form>
                <label>
                    Plant Picture:
                    <input
                        placeholder='link of your plant photo goes here'
                        // value={plant image}
                        onChange={console.log('plant image')}
                    />
                </label>
                <br></br>
                <label>
                    Plant Variety:
                    <input
                        placeholder='what type of plant is it?'
                        // value={plant name}
                        onChange={console.log('plant name')}
                    />
                </label>
                <br></br>
                <label>
                    Plant Description:
                    <input
                        placeholder='tell us about your plant!'
                        // value={plant description}
                        onChange={console.log('plant description')}
                    />
                </label>
                <br></br>
                <label>
                    Plant Age:
                    <input
                        placeholder='how old is your plant?'
                        // value={plant image}
                        onChange={console.log('plant age')}
                    />
                </label>
                <br></br>
                <label>
                    Light Preference:
                    <select
                        placeholder='plant light preference'
                        // value={plant light}
                        onChange={console.log('plant light')}
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
                        // value={plant image}
                        onChange={console.log('plant image')}
                    >
                        <option value="beginner friendly">beginner friendly</option>
                        <option value="advanced care">advanced care</option>
                        <option value="quite finicky">quite finicky</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Plant Health:
                    <input
                        placeholder='How is your plant doing?'
                        // value={plant image}
                        onChange={console.log('plant health')}
                    />
                </label>
                <br></br>
                <label>
                    Still Alive?
                    <select
                        placeholder='still alive?'
                        // value={plant alive}
                        onChange={console.log('plant alive')}
                    >
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </label>
            </form>

        </>
    )
}

export default PlantForm
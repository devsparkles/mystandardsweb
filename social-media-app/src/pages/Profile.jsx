import React from "react";
import { useState } from "react";
function Profile() {

// Use useState to manage the state of the input field
const [inputValue, setInputValue] = useState('');
// Function to handle changes to the input field
function handleChange(event) {
    //console.log(event.target.value);
    setInputValue(event.target.value);
}
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={inputValue}
            onChange={handleChange}
            />
        </form>
        );
}
export default Profile;
import React from "react";
import "./reminder-card.css";

const Card = () =>{
    return(
        <div className="reminder-card">
            <label className="reminder-text-label">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ex dolore 
                magna aliqua. Ut enim ad minim veniam, q
            </label>
            <label className="date-text-label">
                Hora: 12:30
            </label>
        </div>
    );
};

export default Card;
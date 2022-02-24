// Komponente "zurück" Button
import React, { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="back-button-container">
            <button className="backButton" onClick={() => navigate(-1)}>zurück</button>
        </div>

    );
}

export default BackButton;
import React from 'react';
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className="search">
            <button className="backButton" onClick={() => navigate(-1)}>zurück</button>
        </div>

    );
}

export default BackButton;
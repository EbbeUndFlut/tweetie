import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const LikeCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <Link className="likeCounter" onClick={() => setCount(count + 1)} to="#"><FaHeart /> <p className="counterP">{count}</p></Link>
    );
}

export default LikeCounter;
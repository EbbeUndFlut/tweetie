import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const CommentCounter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <Link onClick={() => setCount(count + 1)} to={`/home/${props._id}`}><FaComment /><p className="counterP">{count}</p></Link>
    );
}

export default CommentCounter;
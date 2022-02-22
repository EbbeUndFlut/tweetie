import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaComment } from "react-icons/fa"

const CommentCounter = (props) => {
    const [count, setCount] = useState(0)

    const counterFunc = () => {
        setCount(count + 1)
        props.thefunc(props._id)
    }
    return (
        <Link className="counterP" to={`/answers/${props._id}`} onClick={counterFunc}>
                <FaComment />
                <p className="counterP">{count}</p>
        </Link>

    )
}

export default CommentCounter

import React from 'react'

const PostItem = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <div>
            <span>{props.by}</span>
            <span>{props.posted}</span>
            </div>
        </div>
    )
}
export default PostItem





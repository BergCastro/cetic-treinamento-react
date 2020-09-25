import React from "react";
import "./styles.css";

const PostItem = ({ title, author, datePost }) => {
  return (
    <div className="post__container">
      <h2 className="post__title">{title}</h2>
      <div className="post__details">
        <span>{`Por: ${author}`}</span>
        <span>{`Postado em: ${datePost}`}</span>
      </div>
    </div>
  );
};

export default PostItem;

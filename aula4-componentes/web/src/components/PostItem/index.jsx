import React from 'react';

function PostItem({ title, author, datePost }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <span>{`Por: ${author}`}</span>
        <span>{`Postado em: ${datePost}`}</span>
      </div>
    </div>
  );
}

export default PostItem;

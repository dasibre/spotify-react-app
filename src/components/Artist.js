import React, { Component } from 'react';
//artist specs:
//artist image
//artist Name
//artist followers
//artist thumbnail img
const Artist = ({name,imageUrl,followers}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl}></img>
      <span>{followers}</span>
    </div>
  );
};

export default Artist;

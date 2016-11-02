import React, { Component } from 'react';
//artist component requirements:
//artist large image
//artist Name
//artist followers
//artist thumbnail img
const Artist = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imageUrl}></img>
      <span>{props.followers}</span>
    </div>
  );
};

export default Artist;

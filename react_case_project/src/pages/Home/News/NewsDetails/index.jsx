import React from "react";
import { useParams } from "react-router-dom";
const NewsDetails = () => {
  const {id, title, content} = useParams()
  return (
    <>
      <div>
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default NewsDetails;

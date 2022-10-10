import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imgContainer">
        <a
          href={data.src.xlarge || data.src.large}
          target="_blank"
          rel="noreferrer"
        >
          <img src={data.src.large} alt={data.alt} title={data.alt} />
        </a>
      </div>
    </div>
  );
};

export default Picture;

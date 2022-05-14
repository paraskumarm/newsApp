import React from "react";

export const Newsitem = (
    { title="Default Title",desc="Default Description",imageUrl,newsUrl}
) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <a href={newsUrl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

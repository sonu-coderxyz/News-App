import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;

  return (
    <div className="my-3">
      <div className="card">

        {/* ✅ FIX: default image */}
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://via.placeholder.com/300x200?text=No+Image"
          }
          className="card-img-top"
          alt="news"
        />

        <div className="card-body">
          <h5 className="card-title">
            {title ? title : "No Title"}{" "}
            <span className="badge bg-secondary">New</span>
          </h5>

          <p className="card-text">
            {description ? description : "No Description available"}
          </p>

          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {date ? new Date(date).toGMTString() : "Unknown date"}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
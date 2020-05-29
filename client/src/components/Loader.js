import React from "react";

export const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

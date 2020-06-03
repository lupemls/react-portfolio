import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div>
      <section className="p-3 border">
        <h2 className="mb-3 pb-3">Portfolio</h2>
        <div className="row py-md-3 row-height">
            <Project />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

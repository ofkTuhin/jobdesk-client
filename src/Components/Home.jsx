import React from "react";

import data from "../data/jobpost.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="row justify-between">
          {data.map((item, i) => (
            <div key={item.id} className="md:col-6 col-12 mb-4">
              <div className="bg-white px-4 py-6 shadow">
                <h2>{item.job_title}</h2>
                <Link to={`/job/${item.id}`}>Read more...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

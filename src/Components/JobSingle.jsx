import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobSingle = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  return (
    <section>
      <div className="container">job single</div>
    </section>
  );
};

export default JobSingle;

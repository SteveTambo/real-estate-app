import React from "react";
import RecentCard from "./RecentCard";
import "./recent.css";
import Heading from "../../common/Heading";

function Recent() {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Properties Listed"
            subtitle="Below are some of the most recent listings our agents have forwarded to us"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
}

export default Recent;

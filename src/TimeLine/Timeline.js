import "../TimeLine/Timeline.css";
import React from "react";
import timelineData from "../data/TimelineData.json";
import TimelineItem from "./TimelineItem";
import AboutMe from "../assets/about/mike on a computer.png";

const Timeline = () => {
  if (timelineData.length === 0) return null;

  return (
    <div className="timeline-container">
      
      <img
        className="aboutImage"
        src={AboutMe}
        alt="Sitting with the laptop"
        loading="lazy"
      />
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
};

export default Timeline;

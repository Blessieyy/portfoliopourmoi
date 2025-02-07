import "../TimeLine/Timeline.css";
import React from "react";
import timelineData from "../data/TimelineData.json";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  if (timelineData.length === 0) return null;

  return (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );
};

export default Timeline;

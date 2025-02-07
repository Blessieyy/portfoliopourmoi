import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ data }) => {
  // Ensure return statement is in place
  if (!data || !data.category) return null;

  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}  // starts from left
    animate={{ opacity: 1, x: 0 }}     // moves to original position
    transition={{ duration: 1 }}
    className="timeline-item"
  >
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </motion.div>
  );
};

export default TimelineItem;

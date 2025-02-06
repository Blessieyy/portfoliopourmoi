import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectNavTab.css';

function ProjectNavTab({ setSelectedTab }) {
  const [activeTab, setActiveTab] = useState('project');

  const handleToggle = () => {
    const newTab = activeTab === 'project' ? 'mobile' : 'project';
    setActiveTab(newTab);
    setSelectedTab(newTab);
  };

  return (
    <div className="nav-container">
      <motion.div
        className="nav-slider"
        initial={{ x: 0 }}
        animate={{ x: activeTab === 'mobile' ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
      <div
        className={`nav-item ${activeTab === 'project' ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Web Projects
      </div>
      <div
        className={`nav-item ${activeTab === 'mobile' ? 'active' : ''}`}
        onClick={handleToggle}
      >
        Mobile Projects
      </div>
    </div>
  );
}

export default ProjectNavTab;

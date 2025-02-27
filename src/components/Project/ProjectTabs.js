import React from "react";
import Project from "./Project";
import MobileProjects from "./MobileProjects";
import { useState } from "react";
import ProjectNavTab from "./ProjectNavTab";


const TABS = {
  project: <Project />,
  mobile: <MobileProjects />,
};

function ProjectTabs() {
  const [selectedTab, setSelectedTab] = useState("project");

  return <div>
    <h2 className="project-title">Projects</h2>
    <ProjectNavTab setSelectedTab={setSelectedTab} />
    {TABS[selectedTab]}
  </div>;
}

export default ProjectTabs;

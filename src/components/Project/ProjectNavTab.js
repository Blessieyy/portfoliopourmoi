import React from 'react'

function ProjectNavTab({setSelectedTab}) {
  return (
    <div>
        <div onClick={()=> setSelectedTab('project')}>Web Projects</div>
        <div onClick={()=> setSelectedTab('mobile')}>Mobile Projects</div>
    </div>
  )
}

export default ProjectNavTab
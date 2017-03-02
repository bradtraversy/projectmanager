import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
    let projectItems;

    if(this.props.projects){

      projectItems = this.props.projects.map(project => {
        // Delegate the top level props down to ProjectItem with the spread operator
        return (
          <ProjectItem {...this.props} key={project.title} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;

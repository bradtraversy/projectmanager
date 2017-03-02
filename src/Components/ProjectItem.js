import React, { Component } from 'react';

class ProjectItem extends Component {

    render() {

        // Everything is immutable and stateless at the deepest level

        const { onDelete, project } = this.props;
        const { title, category } = project;

        return (
            <li className="Project">
            <strong>{title}</strong>: {category} <a href="#" onClick={onDelete}>X</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;

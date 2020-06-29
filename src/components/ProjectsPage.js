import React from 'react';
import ProjectModal from './ProjectModal';

export default class ProjectsPage extends React.Component {
    state = {
        projectOpen: undefined
    };

    render() {
        return (
            <div id="projectsWrapper">
                <div className="projects">
                    <div className="project projPortfolioNew" onClick={this.openProject}><span>New Portfolio Site<br/> 2018</span><img src='assets/images/projPortfolioNew.png'/></div>
                    <div className="project projBatt44Ladder" onClick={this.openProject}><span>Battalion Ladder<br/> 2016</span><img src='assets/images/projBatt44.png'/></div>
                    <div className="project projBlackops4Stats" onClick={this.openProject}><span>Blackops 4 stats<br/> 2018</span><img src='assets/images/projBlops4Stats1.png'/></div>
                    <div className="project projClanMisery" onClick={this.openProject}><span>Clan Misery, 2011</span><img src='assets/images/projClanMisery.png'/></div>
                    <div className="project projPortfolioOld" onClick={this.openProject}><span>Portfolio Site, 2011</span><img src='assets/images/circularImg.jpg'/></div>
                </div>
                <ProjectModal
                    projectStatus={this.state.projectOpen}
                    closeProject={this.closeProject}
                />
            </div>
        );
    }

    openProject = (e) => {
        const projectClass = e.currentTarget.className.split(' ')[1];

        this.setState(() => ({
            projectOpen: projectClass
        }));
    }

    closeProject = () => {
        this.setState(() => ({
            projectOpen: undefined
        }));
    }
}
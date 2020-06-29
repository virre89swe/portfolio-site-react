import React from 'react';
import Modal from 'react-modal';

export default class ProjectModal extends React.Component {
    render() {
        return (
        <Modal
            isOpen={!!this.props.projectStatus}
            className="modal"
            closeTimeoutMS={200}
            contentLabel="Open Project"
            onRequestClose={this.props.closeProject}
        >
            <button onClick={this.props.closeProject}>Close</button>
            
            {this.props.projectStatus == 'projPortfolioNew' && 
                <div>
                    <h3>Latest portfolio Site</h3>
                    <p>New portfolio site made in late 2018. Exploring CSS-grid-technology while making a mobile-friendly and clean website from scratch.</p>
                    <p>Converted to a REACT application in 2020, source available at github.</p>
                </div>
            }

            {this.props.projectStatus == 'projBlackops4Stats' &&
                <div>
                    <h3>Blackops 4 Multiplayer stats</h3>
                    <p>Call of Duty Blackops 4 stats page. A fan project that integrates towards a json API and displays data for specific players.</p>
                </div>
            }

            {this.props.projectStatus == 'projBatt44Ladder' &&
                <div>
                    <h3>Battalion 1944 Ladder</h3>
                    <p>Intended as a season and playoff-system for the community of the game battalion 1944.</p>
                    <p>The idea was to be able to create clans, join & challenge teams, and compete against other clans in ladders & cups. </p>
                    <p>It never launched due to the developers themselves launching a ladder system in-game, 
                    but one of my most amibitious projects so far. Source code remains. Built using PHP, Bootstrap, jQuery, Ajax, Mysql</p>
                </div>
            }
            
            {this.props.projectStatus == 'projClanMisery' &&
                <div>
                    <h3>www.clanmisery.com</h3>
                    <p>A community site for the clan Misery. Built during 2011 and launched at www.clanmisery.com . Ambitious project developed in Php, jQuery, Ajax, MySql.</p> 
                    <p>This site contained everything from login & registration to shoutbox and message-boards, all which were built from scratch in PHP(no framework). </p>
                    <p>Note that the site was never adapted for mobile-useage.</p>
                </div>
            }

            {this.props.projectStatus == 'projPortfolioOld' &&
            <div>
                <h3>Old portfolio site</h3>
                <p>Legacy portfolio site developed in 2011 in ASP.NET MVC</p>
            </div>
            }

        </Modal>
        );
    }
}

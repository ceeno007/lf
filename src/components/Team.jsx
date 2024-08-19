// src/components/Team.js
import React from 'react';
import useTeamMembers from '../service/team.js';
import '../style/Teams.css';

const Team = () => {
    const { teamMembers, error } = useTeamMembers();

    if (error) {
        return <div>Error fetching team members: {error.message}</div>;
    }

    return (
        <div className="team-container">
            <h1 className="team-header">Our Team</h1>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-member">
                        {member.image && (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="team-member-image"
                            />
                        )}
                        <h3>{member.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

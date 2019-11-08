import React from 'react';

const Team = ({ index, player, currentLastPlayer }) => {

	const combinedKD = player.kd + currentLastPlayer.kd;

  if (currentLastPlayer.name !== player.name) {
    return (
      <div className="column is-3 message">
        <div className="message-header">
          <span className="is-pulled-left">Team {index + 1}</span>
          <span className="is-pulled-right">
            { combinedKD }
          </span>
        </div>
        <div className="message-body has-text-centered">
          <h3 className="title">
            {player.name} & {currentLastPlayer.name}
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="column is-3 message">
        <div className="message-header">
				<span className="is-pulled-left">Team {index + 1}</span>
          <span className="is-pulled-right">
            { player.kd }
          </span>
        </div>
        <div className="message-body has-text-centered">
          <h3 className="title">{player.name}</h3>
        </div>
      </div>
    );
  }
};

export default Team;

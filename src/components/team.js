import React from 'react';

const Team = ({ index, player, currentLastPlayer }) => {

	// Team
  if (currentLastPlayer.name !== player.name) {
		
		const playerKD = parseFloat(player.kd);
		const currentLastPlayerKD = parseFloat(currentLastPlayer.kd);
		const combinedKD = playerKD + currentLastPlayerKD;

    return (
      <div className="column is-3 message">
        <div className="message-header">
          <span className="is-pulled-left">Team {index + 1}</span>
          <span className="is-pulled-right">
            KD : { combinedKD.toFixed(1) / 2 }
          </span>
        </div>
        <div className="message-body has-text-centered">
          <h3 className="title is-4">
            {player.name} & {currentLastPlayer.name}
          </h3>
        </div>
      </div>
		);
	// Solo player
  } else {
		const playerKD = parseFloat(player.kd);

    return (
      <div className="column is-3 message">
        <div className="message-header">
				<span className="is-pulled-left">Team {index + 1}</span>
          <span className="is-pulled-right">
						KD : { playerKD }
          </span>
        </div>
        <div className="message-body has-text-centered">
					<h3 className="title is-4">{player.name}</h3>
        </div>
      </div>
    );
  }
};

export default Team;

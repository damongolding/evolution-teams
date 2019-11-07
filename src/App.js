import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: "Damon", kd: 2.9 },
        { name: "Guru", kd: 1.2 },
        { name: "Klip", kd: 0.8 },
        { name: "Tommy", kd: 2.2 },
        { name: "John", kd: 3.2 },
        { name: "cyn", kd: 1.4 },
      ]
    };
  }

  componentWillMount() {
    // could do something like pull state from API
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}

  render() {
    const playerSort = this.state.players.sort((a, b) => {
      return b.kd - a.kd;
    });

    const players = playerSort.map(player => {
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.kd}</td>
        </tr>
      );
    });

    const newTeam = playerSort.map((player, index) => {
      const currentLastPlayer = playerSort[playerSort.length - 1];

      playerSort.pop();

      if (currentLastPlayer.name !== player.name) {
        return (
          // Team!
          <div className="column is-3 message">
            <div class="message-header">
              <span className="is-pulled-left">Team {index + 1}</span>
              <span className="is-pulled-right">
                { (player.kd +  currentLastPlayer.kd).toFixed(1) } combined
              </span>
            </div>
            <div class="message-body has-text-centered">
              <h3 className="title">
                {player.name} & {currentLastPlayer.name}
              </h3>
            </div>
          </div>
        );
      } else {
        // Solo player
        return (
          <div className="column is-3 message">
            <div class="message-header">
              <p>Team {index + 1}</p>
            </div>
            <div class="message-body has-text-centered">
              <h3 className="title">{player.name}</h3>
            </div>
          </div>
        );
      }
    });

    return (
      <div className="App">
        <section class="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-7-tablet is-6-desktop">
              <h2 className="title">Players</h2>
                <table class="table is-bordered is-fullwidth">
                  <tr>
                    <th>Player</th>
                    <th>KD</th>
                  </tr>
                  {players}
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="section teams-section">
          <div className="container">
            <h2 className="title">Teams</h2>

            <div class="columns is-multiline">{newTeam}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

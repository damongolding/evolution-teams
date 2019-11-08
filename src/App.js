import React, { Component } from "react";

import Tabletop from 'tabletop';

import Team from './components/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: "Loading...", kd: 0 },
        { name: "Loading...", kd: 0 }
      ]
    };
  }
 
  //https://docs.google.com/spreadsheets/d/10-zhbCvKemVlKJrqHGwjzBXVMylWLEQ6mGZOuFH38Kk/edit?usp=sharing
  componentWillMount() {
    // could do something like pull state from API
    Tabletop.init( {
      key: '10-zhbCvKemVlKJrqHGwjzBXVMylWLEQ6mGZOuFH38Kk',
      simpleSheet: true }
    ).then( (data, tabletop) => { 
      console.log(data);
      this.setState({players:data});
    });
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

      return (
        <Team
          index={index}
          player={player}
          currentLastPlayer={currentLastPlayer}
        />
      );
    });

    return (
      <div className="App">
        <section class="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-7-tablet is-6-desktop">
                <h2 className="title">Players</h2>
                <table class="table is-bordered is-fullwidth">
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>KD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players}
                  </tbody>
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

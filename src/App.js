import React, { Component } from "react";

import Tabletop from 'tabletop';

import Team from './components/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: "Loading...", kd: 0 }
      ]
    };
  }

  componentWillMount() {
    // could do something like pull state from API
    Tabletop.init( {
      key: '2PACX-1vQ2LywYv9ZCcEj-BbFUtsn9DEQF5MxwDl5oUEADMHxEl2KhzqiqZRX6gua6NAv2Y7zrQ_j2ohtu-q9v',
      simpleSheet: true }
    ).then(function(data, tabletop) { 
      this.setState({players:data});
    })
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

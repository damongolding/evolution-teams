import React, { Component } from "react";

import Tabletop from "tabletop";

import Team from "./components/team";
import Header from "./components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [{ name: "Loading players", kd: 0 }]
    };
  }

  componentDidMount() {
    // could do something like pull state from API
    Tabletop.init({
      key: "10-zhbCvKemVlKJrqHGwjzBXVMylWLEQ6mGZOuFH38Kk",
      simpleSheet: true
    }).then((data, tabletop) => {
      this.setState({ players: data });
    });
  }

  render() {
    const playerSort = this.state.players.sort((a, b) => {
      return b.kd - a.kd;
    });

    const players = playerSort.map((player, index) => {
      return (
        <tr key={index}>
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
          key={index}
        />
      );
    });

    return (
      <div className="App">
        <Header />

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-12-mobile is-9-tablet content">
                <figure className="image is-16by9">
                  <iframe
                    title="2v2 brackets"
                    className="has-ratio"
                    width="640"
                    height="360"
                    src="https://widget.toornament.com/tournaments/639313491010002944/stages/3093068508158189568/?_locale=en_GB"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </figure>
                
              </div>
            </div>
          </div>
        </section>

        

        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-7-tablet is-6-desktop">
                <h2 className="title">Players</h2>
                <table className="table is-bordered is-fullwidth">
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>KD</th>
                    </tr>
                  </thead>
                  <tbody>{players}</tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section teams-section">
          <div className="container">
            <h2 className="title">Teams</h2>

            <div className="columns is-multiline">{newTeam}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

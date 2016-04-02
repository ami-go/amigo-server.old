/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './GameLobby.scss';
//import WGo from 'wgo';

const title = 'Game Lobby';

class GameLobby extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }
  
  componentDidMount() {
    console.log('mounted');
    let WGo = require('wgo');
    this.player = new WGo.BasicPlayer(this.refs.board, {
        sgfFile: "game.sgf"
    });
    console.log(WGo);
    console.log(this.player);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>Lobby</p>
          <div id="lobby-player" ref="board" className={s.player}></div>
        </div>
      </div>
    );
  }

}

export default withStyles(GameLobby, s);

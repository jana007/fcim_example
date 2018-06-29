import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
      const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <Grid>
        <Jumbotron>
           <h2>Welcome</h2>
           <p>This single page web application uses React and Bootstrap to show a little of my web knowledge.</p>
           <p>Tasks chosen are, collapsable area as seen on <a href="./about">about</a>, a simple form as seen on the <a href="./contact">contact page</a> and the lovely beagle video below. </p>
           <Link to="/about">
               <Button bsStyle="primary">About</Button>
             </Link>
             <Link to="/contact">
               <Button bsStyle="primary">Contact Me</Button>
             </Link>
              
      <YouTube
        videoId="D7QcBTW_Fmo"
        opts={opts}
        onReady={this._onReady}
      />
        </Jumbotron>
      </Grid>
    )
  }
    _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

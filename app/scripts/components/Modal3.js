import React from 'react';
import ReactDOM from 'react-dom';

const Modal3 = React.createClass({
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background:  '#343C43'
  },
  contentStyles: {
    background: '#263238',
    width: '40%',
    margin: '0 auto',
    height: '75vh',
    marginTop: '9.5%'
  },
  stats: {
    "name" : "Marlon Jackson",
    "img" : "https://s31.postimg.org/wm5bq3wev/marlon.jpg",
    "spicegirl": "Sporty Spice",
    "beatles" : "Revolution",
    "spice" : "Coriander",
  },
  render: function(){
    return (
      <div className="modal-container" style={this.containerStyles}>
        <div className="modal-content" style={this.contentStyles}>
        <div className="stats">
          <h1>{this.stats.name}</h1>
          <img src={this.stats.img}/>
          <h4>Favorite Spice:</h4>
          <h5>{this.stats.spice}</h5>
          <h4>Favorite Spice Girl:</h4>
          <h5>{this.stats.spicegirl}</h5>
          <h4>Favorite Beatles Song:</h4>
          <h5>{this.stats.beatles}</h5>
        </div>
      </div>
    </div>
    )
  }
});
export default Modal3;

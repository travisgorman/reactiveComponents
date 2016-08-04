import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  render: function(){
    return (
      <div className="modal-container"> style={this.containerStyles}>
        <div className="modal-content"> style={this.contentStyles}>
      </div>
      {this.props.children}
    </div>
    )
  }
});

import React from 'react';
import './App.css';

import CytoscapeComponent from 'react-cytoscapejs';

class App extends React.Component {
  constructor(props) {
    const queryParams = new URLSearchParams(window.location.search);

    super(props);
    this.state = {
      nodes: queryParams.get("nodes") || 0,
      value: -1,
      elements: [
        {data: {id: 'one', label: 'Node 1'}, position: {x: 30, y: 30}},
        {data: {id: 'two', label: 'Node 2'}, position: {x: 130, y: 30}},
        {data: {source: 'one', target: 'two', label: 'Edge from Node1 to Node2'}}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
  Text Fields:
  - Nodes
  - Odds

  Output:
  - Odds of collision somewhere

  TODO:
  1. Add text fields
  2. Center style cytoscape component
  3. Autogenerate number of elements
    - Need to calculate positions, which should be fun
    - Need to calculate edges, which should also be fun

  Notes:
  - Margin of 30px, about
   */

  calculateCollision() {
    // Calculate the odds of a collision
    // Calculate the odds of no collision: 1 - (1 - collision rate)^(total number of connections)
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(window, window.location)
  }

  handleSubmit(event) {

    /*
    TODO:
    - Calculate positions in 600 x 600 grid
      - Picture circumscribing a circle by n
      - Diameter of 500
      1. Calculate based on center, and just add offset of (300, 300)
      2. Need to go from circumference to position, any way to use polar coordinates?
        - Just use degrees, should be sufficient,
     */

    if (this.state.value > 0 && this.state.value < 100) {
      this.setState({
        nodes: this.state.value,
        elements: []
      });
    } else {
      alert("Value must be greater than 1 and less than 100")
    }
  }

  render() {
    return (
      <div style={{width:"100%", height: "100%", padding: "50px"}}>
        <form>
          <label>
            Current Nodes: {this.state.nodes}
            <input type="number" name="nodes" onChange={this.handleChange} />
          </label>
          <label>
            Collision Rate: {this.state.collision_rate}
            <input type="number" name="collision_rate" onChange={this.handleChange} />
          </label>
          <label>
            Connections: {this.state.connections}
          </label>


          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>

        <CytoscapeComponent elements={this.state.elements} style={{width: '600px', height: '600px'}}/>
      </div>
    );
  }
}

export default App;

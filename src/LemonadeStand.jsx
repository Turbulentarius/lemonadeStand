import React, { Component } from 'react';

class LemonadeStand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profit: 0,
    };
  }

  sellLemonade = () => {
    this.setState({ profit: this.state.profit + 5 });
  };

  buyLemons = () => {
    this.setState({ profit: this.state.profit - 2 });
  };

  render() {
    return (
      <div>
        <h2>Lemonade Stand</h2>
        <p>Profit: ${this.state.profit}</p>
        <button onClick={this.sellLemonade}>Sælg Lemonade</button>
        <button onClick={this.buyLemons}>Køb Citroner</button>
      </div>
    );
  }
}

export default LemonadeStand;

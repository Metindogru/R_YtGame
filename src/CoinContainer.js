import React, { Component } from "react";
import { choice } from "./Helpers";
import Coin from "./Coin";
import "./CoinContainer.css";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: "tails",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png",
      },
      {
        side: "heads",
        imgSrc:
          "https://play-lh.googleusercontent.com/XqQPFaIqg5vEiB316LM5eOHThuZHt1ZIVleJ0_hX4LrhJdG6le951ybCszG0w5AKl_-i",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nTails: 0,
      nHeads: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h1>Madeni Para Oyunu</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Fırlat!</button>
        <div className="p-info">
          <p className="total-flips">
            <b> Toplam fırlatma: </b> {this.state.nFlips} <br />
          </p>
          <p className="total-tails">
            {" "}
            <b> Toplam Yazı : </b>
            {this.state.nTails}
            <br />
          </p>
          <p className="total-heads">
            {" "}
            <b> Toplam Tura: </b>
            {this.state.nHeads}
          </p>
        </div>
      </div>
    );
  }
}

export default CoinContainer;

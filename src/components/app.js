import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  time() {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // January is 0!

    const yyyy = date.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${mm}/${dd}/${yyyy} at ${hours}:${minutes} ${ampm}`;
    return strTime;
  }
  render() {
    const { open } = this.state;
    return (
      <div className="page-wrapper">
        <div className="status">
          {open
            ? <div className={`blue`}>OPEN<span className="subtext">(But it's slammed. Just spend the night on DI)</span></div>
            : <div className={`red`}>CLOSED<span className="subtext">(on the eastbound side. Don't even bother)</span></div>}</div>
        <p>Stole the idea from <a href="https://isthecooperriverbridgeclosed.com">isthecooperriverbridgeclosed.com</a> by Sean McCambridge. Photo by <a href="https://i.pinimg.com/originals/9b/5b/bd/9b5bbd3cf02efd9ff53cde48f0fcad63.jpg">Meredith Jones</a>. Website by <a href="mailto:london.andrewd@gmail.com">Andrew London</a>. <br /> Updated 12/11/2019 at 4:07 PM.</p>
      </div>
    );
  }
}

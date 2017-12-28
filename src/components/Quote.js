import React, { Component } from 'react';
import '../stylesheets/Quote.css';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getQuote() {
    fetch('https://talaikis.com/api/quotes/random/')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          quote: body.quote,
          author: body.author
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  changeBackgroundColor() {
    let randomColor = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' +
                 (85 + 10 * Math.random()) + '%)';
    document.body.style.backgroundColor = randomColor;
  }

  handleClick() {
    this.getQuote();
    this.changeBackgroundColor();
  }

  componentDidMount() {
    this.getQuote();
    this.changeBackgroundColor();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 quote">
            <h1>"{this.state.quote}"</h1>
            <h3>- {this.state.author}</h3>
          </div>
          <div className="col-sm-12 text-center">
            <button onClick={this.handleClick} className="btn btn-lg btn-primary"> New Random Quote </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Quote;

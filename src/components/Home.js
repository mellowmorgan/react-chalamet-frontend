import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      randomQuote: null,
      randomPhoto: null
    };
  }
  makePhotoApiCall = () => {
    fetch(`http://localhost:3001/photos/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            randomPhoto: jsonifiedResponse.file_path
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }
  makeQuoteApiCall = () => {
    fetch(`http://localhost:3001/quotes/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse.content)
          this.setState({
            isLoaded: true,
            randomQuote: jsonifiedResponse.content
            
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        });
  }
  componentDidMount() {
    this.makePhotoApiCall()
    this.makeQuoteApiCall()
  }
  render() {
    const { error, isLoaded, randomQuote, randomPhoto } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Quote</h1>
          <div><p>{randomQuote}</p></div>
          <h1>Photo</h1>
          <div>
            <img src={randomPhoto} alt="A random photo of Timothee Chalamet" />
          </div>
        </React.Fragment>
      );
    }
  }
}
export default Home;

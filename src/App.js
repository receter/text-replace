import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function replaceAll(target, search, replacement) {
  return target.replace(new RegExp(search, 'g'), replacement);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theText: '',
      searchText1: '<h3',
      replaceText1: '<h2',
      searchText2: '<h4',
      replaceText2: '<h3',
      searchText3: '<h5',
      replaceText3: '<h4',
      searchText4: '</h3>',
      replaceText4: '</h2>',
      searchText5: '</h4>',
      replaceText5: '</h3>',
      searchText6: '</h5>',
      replaceText6: '</h4>',
    }
  }

  startReplacing = () => {

    let theText = this.state.theText;
    theText = replaceAll(theText, this.state.searchText1, this.state.replaceText1);
    theText = replaceAll(theText, this.state.searchText2, this.state.replaceText2);
    theText = replaceAll(theText, this.state.searchText3, this.state.replaceText3);
    theText = replaceAll(theText, this.state.searchText4, this.state.replaceText4);
    theText = replaceAll(theText, this.state.searchText5, this.state.replaceText5);
    theText = replaceAll(theText, this.state.searchText6, this.state.replaceText6);

    this.setState({
      theText: theText,
    });
  };

  render() {
    return (
      <div className="App">
        <textarea value={this.state.theText} onChange={(e) => this.setState({theText: e.target.value})} />
        <div>
          <div>
            First
            <input type="text" value={this.state.searchText1} onChange={(e) => this.setState({searchText1: e.target.value})} />
            <input type="text" value={this.state.replaceText1} onChange={(e) => this.setState({replaceText1: e.target.value})} />
          </div>
          <div>
            Then 2.
            <input type="text" value={this.state.searchText2} onChange={(e) => this.setState({searchText2: e.target.value})} />
            <input type="text" value={this.state.replaceText2} onChange={(e) => this.setState({replaceText2: e.target.value})} />
          </div>
          <div>
            Then 3.
            <input type="text" value={this.state.searchText3} onChange={(e) => this.setState({searchText3: e.target.value})} />
            <input type="text" value={this.state.replaceText3} onChange={(e) => this.setState({replaceText3: e.target.value})} />
          </div>
          <div>
            Then 4.
            <input type="text" value={this.state.searchText4} onChange={(e) => this.setState({searchText4: e.target.value})} />
            <input type="text" value={this.state.replaceText4} onChange={(e) => this.setState({replaceText4: e.target.value})} />
          </div>
          <div>
            Then 5.
            <input type="text" value={this.state.searchText5} onChange={(e) => this.setState({searchText5: e.target.value})} />
            <input type="text" value={this.state.replaceText5} onChange={(e) => this.setState({replaceText5: e.target.value})} />
          </div>
          <div>
            Then 6.
            <input type="text" value={this.state.searchText6} onChange={(e) => this.setState({searchText6: e.target.value})} />
            <input type="text" value={this.state.replaceText6} onChange={(e) => this.setState({replaceText6: e.target.value})} />
          </div>
          <div>
            <button onClick={this.startReplacing}>Search and Replace!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

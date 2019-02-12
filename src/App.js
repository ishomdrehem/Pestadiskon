import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
  this.state = { data: [] };
}

  componentDidMount() {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET", "https://dev.pestadiskon.com/api/Discounts", false);
    xmlhttp.send();
    var dataJson = JSON.parse(xmlhttp.responseText);
    console.log(dataJson);
    this.setState({
            data: dataJson
          });
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((row, i) =>     
              <tr key={i} style={{color: row.provider == 'ovo' ? 'yellow' : 'blue'}}>
                <td>{row.discountid}</td>
                <td>{row.short_description}</td>
              </tr>)}
          </tbody>
        </table>
        </header>
      </div>
    );
  }
}

export default App;

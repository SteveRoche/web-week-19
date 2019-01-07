import React, { Component } from 'react';
import './App.css';
const Logo = require('./logo.png');
const ic = require('./ic.png');

const App = () => (
  <div className="App">
    <NavBar />
    <Content />
    <img src={ic} alt="" id="ic" />
  </div>
);

const NavBar = () => (
  <div className="nav-bg">
    <img src={Logo} className="logo" alt="Manipal Logo" />
    <NavItem selected>Enrollment Details</NavItem>
    <NavItem>Course Details</NavItem>
    <NavItem>Time Table</NavItem>
    <NavItem>Attendance</NavItem>
    <NavItem>Internal Marks</NavItem>
    <NavItem>Grade Sheet</NavItem>
    <NavItem>Achievements</NavItem>
    <NavItem>Incidents</NavItem>
  </div>
);

const NavItem = ({ children, selected }) => (
  <span className={`NavItem ${selected ? 'selected' : ''}`}>{children}</span>
);

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onSearch = data => {
    console.log(data);
    this.setState({
      data: Object.keys(data)
        .filter(key => key !== 'id')
        .map(key => [key, data[key]])
    });
  };

  render() {
    return (
      <div className="Content">
        <Header searchCallback={this.onSearch} />
        <AcademicsView data={this.state.data} />
        <ShadowText />
      </div>
    );
  }
}

const Header = ({ searchCallback }) => (
  <div className="Header">
    <i className="fa fa-2x fa-align-right" />
    <span className="Breadcrumbs">
      <span>Academics</span> <span>/</span> <span>Enrollment Details</span>
    </span>
    <Searchbar searchCallback={searchCallback} />
    <i className="fa fa-2x fa-th" />
    <i className="fa fa-2x fa-user-circle" />
  </div>
);

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  onSubmit = () => {
    fetch(`/getStudent/${this.state.search}`)
      .then(res => res.json())
      .then(data => this.props.searchCallback(data));
  };

  render() {
    return (
      <span className="Searchbar">
        <input
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={this.onChange}
        />
        <button type="submit" onClick={this.onSubmit}>
          Search
        </button>
      </span>
    );
  }
}

const AcademicsView = ({ data }) => (
  <div className="AcademicsView">
    <SideBar />
    <Table data={data.slice(0, data.length / 2)} type="table1" />
    <Table data={data.slice(data.length / 2 + 1)} type="table2" />
  </div>
);

const SideBar = () => (
  <aside className="SideBar">
    <span>
      Aca<span>dem</span>ics
    </span>
  </aside>
);

const Table = ({ data, type }) => (
  <table className={`Table ${type}`}>
    <tbody>
      {data.map(([key, value], i) => (
        <tr key={i}>
          <td id="val1">{key}</td>
          <td id="val2">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ShadowText = () => (
  <span className="ShadowText">
    Man<span>i</span>pal
  </span>
);

export default App;

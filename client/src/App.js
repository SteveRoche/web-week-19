import React from 'react';
import './App.css';
var Logo = require('./logo.png');
var ic = require('./ic.png');

var data1 = {
  'Roll No.': 32,
  'Enrollment No.': 170906244,
  'Academic Year': '3089 - 3090',
  'Batch': 87,
  'Semester': 7,
  'T.G. Contact': 'TG54907',
  'Application No.': 8675309,
  'Admitted Year': '3086 - 3087',
  'Group': '9B',
  'T.G. Name': 'Ateacher',
  'T.G. Email': 'teacher@guardian.com'
};

var data = [];
for(var i in data1)
    data.push([i, data1[i]]);

const App = () => (
  <div className="App">
    <NavBar />
    <Content />
    <img src={ic} alt="" id="ic"/>
  </div>
);

const NavBar = () => (
  <div className="nav-bg">
      <img src={Logo} className="logo" alt="Manipal Logo"/>
      <NavItem selected>Enrollment Details</NavItem>
      <NavItem>Course Details</NavItem>
      <NavItem>Time Table</NavItem>
      <NavItem>Attendance</NavItem>
      <NavItem>Internal Marks</NavItem>
      <NavItem>Grade Sheet</NavItem>
      <NavItem>Achivements</NavItem>
      <NavItem>Incidents</NavItem>
  </div>
);

const NavItem = ({ children, selected }) => (
  <span className={`NavItem ${selected ? 'selected' : ''}`}>{children}</span>
);

const Content = () => (
  <div className="Content">
    <Header />
    <AcademicsView />
    <ShadowText />
  </div>
);

const Header = () => (
  <div className="Header">
    <i className="fa fa-2x fa-align-right" />
    <span className="Breadcrumbs">
      <span>Academics</span> <span>/</span> <span>Enrollment Details</span>
    </span>
    <i className="fa fa-2x fa-th" />
    <i className="fa fa-2x fa-user-circle" />
  </div>
);

const AcademicsView = () => (
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

const Table = ({ data,type }) => (
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

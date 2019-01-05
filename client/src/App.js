import React from 'react';
import './App.css';
import logo from './logo.png';

const data = [
  ['Roll No.', 1729],
  ['Enrollment No.', 142857],
  ['Academic Year', '3089 - 3090'],
  ['Batch', 87],
  ['Semester', 7],
  ['T.G. Contact', 'TG54907'],
  ['Application No.', 8675309],
  ['Admitted Year', '3086 - 3087'],
  ['Group', '9B'],
  ['T.G. Name', 'Ateacher'],
  ['T.G. Email', 'teacher@guardian.com']
];

const App = () => (
  <div className="App">
    <NavBar />
    <Content />
  </div>
);

const NavBar = () => (
  <nav className="NavBar">
    <ul>
      <NavItem>
        <img src={logo} alt="MU Logo" />
      </NavItem>
      <NavItem selected>Enrollment Details</NavItem>
      <NavItem>Course Details</NavItem>
      <NavItem>Time Table</NavItem>
      <NavItem>Attendance</NavItem>
      <NavItem>Internal Marks</NavItem>
      <NavItem>Grade Sheet</NavItem>
      <NavItem>Achivements</NavItem>
      <NavItem>Incidents</NavItem>
    </ul>
  </nav>
);

const NavItem = ({ children, selected }) => (
  <li className={`NavItem ${selected ? 'selected' : ''}`}>{children}</li>
);

const Content = () => (
  <div className="Content">
    <Header />
    <AcademicsView />
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
    <Table data={data.slice(0, data.length / 2)} />
    <Table data={data.slice(data.length / 2 + 1)} />
    <ShadowText />
  </div>
);

const SideBar = () => (
  <aside className="SideBar">
    <span>
      Aca<span>dem</span>ics
    </span>
  </aside>
);

const Table = ({ data }) => (
  <table className="Table">
    <tbody>
      {data.map(([key, value], i) => (
        <tr key={i}>
          <td>{key}</td>
          <td>{value}</td>
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

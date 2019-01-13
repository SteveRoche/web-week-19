import React, { Component } from 'react';
import Table from './Table';

class AcademicsView extends Component {
  render() {
    return (
      <div className="AcademicsView">
        <SideBar />
        <Table data={[['Name', 'Bro'], ['TG Name', 'Big bro']]} type="table1" />
        <Table
          data={[['Roll No.', 55], ['Email', 'bro@tg.com']]}
          type="table2"
        />
      </div>
    );
  }
}

class SideBar extends Component {
  render() {
    return (
      <aside className="SideBar">
        <span>
          Aca<span>dem</span>ics
        </span>
      </aside>
    );
  }
}

export default AcademicsView;

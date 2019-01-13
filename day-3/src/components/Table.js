import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table className={`Table ${this.props.type}`}>
        <tbody>
          {this.props.data.map(([key, value], i) => (
            <tr key={i}>
              <td id="val1">{key}</td>
              <td id="val2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

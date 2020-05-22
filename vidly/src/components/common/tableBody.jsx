import React, { Component } from "react";

class TableBody extends Component {
  // state = {  }
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          {columns.map(column =><tr></tr>}
        ))}
      </tbody>
    );
  }
}

export default TableBody;

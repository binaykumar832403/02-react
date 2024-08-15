import React from "react";
import isEqual from "lodash/isEqual";

class PendingComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextprops) {
    if (isEqual(nextprops.prop1, this.props.prop1)) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("from pending component");
    return (
      <>
        <h2>Pending Task</h2>
        {this.props.prop1.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button onClick={() => this.props.prop2(item.id)}>done</button>
          </div>
        ))}
      </>
    );
  }
}
export default PendingComponent;

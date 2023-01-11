import React from "react";
import "./Hello.css";

class Hello0 extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Hello World</h1>
        <p>{this.props.leyend}</p>
      </div>
    );
  }
}

const Hello1 = (props) => {
  return (
    <div>
      <h1 className="bg-danger text-center text-warning">Hello World !</h1>
      <p className="text-center bg-info">{props.leyend}</p>
    </div>
  );
};

const Hello = (props) => {
  return (
    <div className="tc">
      <h1 className="f1">Hello World !</h1>
      <p className="f4 b i dark-blue">{props.leyend}</p>
    </div>
  );
};

export default Hello;

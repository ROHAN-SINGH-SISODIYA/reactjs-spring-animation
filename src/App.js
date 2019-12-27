import React from "react";
import { Transition, animated } from "react-spring";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";


class App extends React.Component{
  state = {
    showComponent3: false
  };

  toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Component1 />
        <Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}
export default App 

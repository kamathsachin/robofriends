//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchList from "../components/SearchList";
import Scroll from "../components/Scroll";

import { setSearchField } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

// function App() {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     robots: [],
//   //     searchfield: "",
//   //   };
//   // }

//   // componentDidMount() {
//   //   fetch("https://jsonplaceholder.typicode.com/users")
//   //     .then((response) => response.json())
//   //     .then((users) => {
//   //       this.setState({ robots: users });
//   //     });
//   // }

//   const [robots, setRobots] = useState([]);
//   const [searchfield, setSearchField] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         setRobots(users);
//       });
//   }, []);

//   const onSearchChange = (event) => {
//     setSearchField(event.target.value);
//   };

//   const filteredRobots = robots.filter((robot) => {
//     return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//   });

//   console.log(filteredRobots);

//   return (
//     <div className="tc">
//       <h1 className="f1">RoboFriends</h1>
//       <SearchList searchChange={onSearchChange}></SearchList>
//       <Scroll>
//         <CardList robots={filteredRobots}></CardList>
//       </Scroll>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(filteredRobots);

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchList searchChange={onSearchChange}></SearchList>
        <Scroll>
          <CardList robots={filteredRobots}></CardList>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

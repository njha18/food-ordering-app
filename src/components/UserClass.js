import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/mohamadc21");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location } = this.state.userInfo;
    console.log("Child Rendered");
    return (
      <div className="user-card">
        {/* <img src={avatar_url} /> */}
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@nehajha18091999</h4>
      </div>
    );
  }
}
export default UserClass;

// import UserClass from "./User";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web series</h2>

//       <UserClass name={"Neha Jha (classes)"} location={"Bangalore"} />
//     </div>
//   );
// };
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("Parent rendered");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React web series</h2>
        <div>
          LoggedIN User
          <UserContext.Consumer>
            
            {({LoggedInUser})=>(
              <h2>hii{LoggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User /> */}
        <UserClass />
      </div>
    );
  }
}
export default About;

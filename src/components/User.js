import { useState, useEffect } from "react";
const User = (props) => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    fetchDetails();
    //     const timer=setInterval(()=>{
    //       console.log("hi")
    //     },1000)
    //     return()=>{
    // clearInterval(timer);
    //     }
  }, []);
  const fetchDetails = async () => {
    const data = await fetch("https://api.github.com/users/mohamadc21");
    const json = await data.json();
    console.log(json);
    setUserInfo(json);
  };
  const { name, location } = userInfo;

  return (
    <div className="user-card">
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:@nehajha18091999</h4>
    </div>
  );
};
export default User;

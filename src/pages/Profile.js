import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  // fetch data from backend server and we need to do it on the basis of ID

  const { username } = useParams();

  return <div>Profile with id of {username}</div>;
};

export default Profile;

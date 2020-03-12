import React, { Component } from "react";

const Profile = props => {
  if (!props.user.email) {
    props.history.push("/log-in");
  }
  return (
    <div>
      <br />
      <h3>Profile</h3>
      <p>{props.user.email}</p>
      <p>{props.user.location}</p>
    </div>
  );
};

export default Profile;

import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import "../styles/profile.scss";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div class="profile-container">
    <h2>Your Profile</h2>
    <div class="profile-info">
      <p><strong>Username:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  </div>
  );
};

export default Profile;


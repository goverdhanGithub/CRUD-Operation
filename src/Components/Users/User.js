import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const state = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const [user, setUser] = useState(state);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User Name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
      <hr />
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
    </>
  );
};

export default User;

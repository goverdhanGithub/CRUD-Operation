import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
//useParams: to get any data throught id

const EditUsers = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    //put any perticular id into form
    navigate("/");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Register User</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter your Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your Website Name"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default EditUsers;

import * as React from "react";
import img from "../images/profile1.png";
import { TextInput, Button } from "evergreen-ui";
import Select from "react-dropdown-select";
import { useState, useEffect } from "react";
const Edit = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#00a69c",
          height: "120vh",
          width: "26%",
          marginTop: 30,
          margin: "auto",

          padding: 30,
          boxShadow: "15px 10px 30px 10px #bbbbbb",
        }}
      >
        <div>
          <img
            src={img}
            style={{
              width: 100,
              height: 100,
              marginLeft: 120,
              borderRadius: 50,
            }}
          />
          <br />
        </div>
        <h2 style={{ color: "black", marginLeft: 70 }}>EDIT PROFILE</h2>
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          User Id :
        </h3>
        <TextInput
          disabled
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          Name :
        </h3>
        <TextInput
          placeholder="Enter Name"
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          College Name :
        </h3>
        <TextInput
          placeholder="Enter College Name"
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          Gender :
        </h3>
        <div className="container-sm py-3" style={{ marginTop: -16 }}>
          <div
            className="input-group mb-3"
            style={{
              width: 300,
              height: 35,
              marginLeft: -11,
              borderRadius: 40,
            }}
          >
            <select
              className="form-select"
              id="inputGroupSelect01"
              style={{ borderRadius: 20, color: "#D3D3D3" }}
            >
              <option selected style={{ color: "white" }}>
                Choose...
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
        </div>
        <h3
          style={{
            color: "white",
            marginTop: -20,
            marginLeft: 5,
            fontSize: 20,
          }}
        >
          Email :
        </h3>

        <TextInput
          placeholder="Enter Email"
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          Mobile Number :
        </h3>
        <TextInput
          placeholder="Enter Mobile Number"
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          College Id :
        </h3>
        <TextInput
          placeholder="Enter College Id"
          style={{ height: 35, width: 300, borderRadius: 20 }}
        />
        <h3
          style={{ color: "white", marginTop: 8, marginLeft: 5, fontSize: 20 }}
        >
          Total Courses Enrolled :
        </h3>
        <TextInput
          style={{ height: 35, width: 300, borderRadius: 20 }}
          disabled
        />

        <br />
        <br />
        <Button
          marginLeft={120}
          intent="success"
          style={{
            width: 80,
            height: 30,
            fontSize: 20,
            color: "#00a69c",
            borderRadius: 20,
          }}
        >
          Edit
        </Button>
      </div>
    </>
  );
};
export default Edit;

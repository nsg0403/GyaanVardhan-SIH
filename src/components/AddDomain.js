import * as React from "react";
import img from "../images/logo1.png";
import { TextInput, Button } from "evergreen-ui";
const Forget = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#00a69c",
          height: "85vh",
          width: "26%",
          marginTop: 30,
          margin: "auto",

          padding: 30,
          boxShadow: "15px 10px 30px 10px #bbbbbb",
        }}
      >
        <div>
          <h2 style={{ color: "black", marginLeft: 70 }}>ADD DOMAIN</h2>
          <img
            src={img}
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 10,
              marginTop: -70,
              borderRadius: 40,
            }}
          />
          <br />
          <br />
        </div>
        <div style={{ marginTop: -110, marginLeft: 5 }}>
          <h3 style={{ color: "white", marginLeft: 70 }}>Enter Domain</h3>
          <TextInput
            placeholder="Enter Domain"
            style={{ height: 45, width: 340, borderRadius: 20 }}
          />
        </div>

        <br />
        <br />
        <Button
          marginLeft={120}
          intent="success"
          style={{
            width: 100,
            height: 50,
            fontSize: 20,
            color: "#00a69c",
            borderRadius: 20,
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
export default Forget;

import React from "react";

function Register() {

  return (
    <div>

      <h2>Sign-up</h2>

      <form>

        <input
          type="text"
          placeholder="Username"
          name="username"
        />

        <br/>

        <input
          type="text"
          placeholder="First Name"
          name="first_name"
        />

        <br/>

        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
        />

        <br/>

        <input
          type="email"
          placeholder="email"
          name="email"
        />

        <br/>

        <input
          type="password"
          placeholder="Password"
          name="password"
        />

        <br/>

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;

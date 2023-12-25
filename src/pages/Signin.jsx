import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthAsync } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.status);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(fetchAuthAsync(email, password))
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div className="form">
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>{loading ? "Loading..." : "Submit"}</button>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "16px",
            textAlign: "left",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Signin;

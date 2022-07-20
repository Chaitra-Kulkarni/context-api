import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <form className="login-form">
        <label>Login Page</label>
        <input type="text" placeholder="Enter username" />
        <input type="number" placeholder="Enter age" />
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;

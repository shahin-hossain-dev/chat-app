import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });
  const { login, loading } = useLogin();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(loginInputs);
  };

  return (
    <div className="flex items-center justify-center flex-col max-w-96 mx-auto min-h-screen">
      <div className="h-full w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100">
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <form onSubmit={handleLoginSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered"
              onChange={(e) =>
                setLoginInputs({ ...loginInputs, username: e.target.value })
              }
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered"
              onChange={(e) =>
                setLoginInputs({ ...loginInputs, password: e.target.value })
              }
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-blue-800"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary w-full"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <p className="text-center">
          Don&apos;t Have any account,{" "}
          <Link to={"/signup"} className="link link-primary">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

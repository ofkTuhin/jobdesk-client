import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const location = useLocation();
  const nevigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const user = {
    email: "faruk.themefisher@gmail.com",
    password: "123456",
  };
  console.log(from);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === user.email && user.password === password) {
      localStorage.setItem("login", true);
      console.log(true);
      nevigate(from, { replace: true });
    } else {
      console.log(false);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="row items-center justify-center">
          <div className="col-12 md:col-6">
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
              <h2 className="text-xl font-semibold mb-4">Log In</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-md"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-md"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

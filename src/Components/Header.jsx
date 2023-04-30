import GithubSluggerr from "github-slugger";
import { Link, NavLink, useNavigate } from "react-router-dom";
const menu = ["home", "applied job", "blog", "contact"];
const Header = () => {
  const navgate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("login");
    if (!localStorage.getItem("login")) {
      navgate("/");
    }
  };
  const slugger = new GithubSluggerr();
  return (
    <header className="py-4">
      <nav className="flex justify-between items-center container">
        <div className="text-2xl">
          <h4>jobdesk</h4>
        </div>
        <ul>
          {menu.map((item) => (
            <li key={item} className="text-base capitalize inline-block mr-4">
              <Link to={item === "home" ? "/" : slugger.slug(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        {localStorage.getItem("login") ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleLogOut}
          >
            sign out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            sign in
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;

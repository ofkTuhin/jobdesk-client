import GithubSluggerr from "github-slugger";
import { Link } from "react-router-dom";
const menu = ["home", "applied job", "blog", "contact"];
const Header = () => {
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
        <a href="#">link</a>
      </nav>
    </header>
  );
};

export default Header;

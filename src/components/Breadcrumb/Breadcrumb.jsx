import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index}>
            <span className="separator">/</span>
            {isLast ? (
              <span className="active">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            ) : (
              <Link to={routeTo}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

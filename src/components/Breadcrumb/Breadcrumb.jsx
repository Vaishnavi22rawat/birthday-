import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import "./Breadcrumb.css";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <FaHome className="home-icon" /> Home
            </Link>
          </li>

          {items.map((crumb, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="breadcrumb-item">
                <FaChevronRight className="separator-icon" />
                {isLast || !crumb.path ? (
                  <span className="breadcrumb-current">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="breadcrumb-link">
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

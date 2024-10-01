import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { session } = useAuth();

  if (!session) {
    return null;
  } else {
    const { user } = session;

    const { user_metadata } = user;

    const { avatar_url } = user_metadata;

    return (
      <div className="top_header_area">
        <div className="container">
          <div className="row">
            <div className="col-5 col-sm-6">
              <div className="top_social_bar">
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link
                  to="https://x.com/christian_timbe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link
                  to="https://linkedin.com/in/chris-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-skype" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            <div className="col-7 col-sm-6">
              <div className="signup-search-area d-flex align-items-center justify-content-end">
                {session ? (
                  <div className="flex items-center">
                    <img
                      className="inline object-cover w-8 h-8 rounded-full"
                      src={avatar_url}
                      alt="Profile image"
                    />
                  </div>
                ) : (
                  <div className="login_register_area d-flex">
                    <div className="login">
                      <Link to="/login">Log in</Link>
                    </div>
                  </div>
                )}
                <div className="search_button">
                  <Link className="searchBtn" to="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </Link>
                </div>
                <div className="search-hidden-form">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search-anything"
                      placeholder="Search Anything..."
                    />
                    <input type="submit" value="" className="d-none" />
                    <span className="searchBtn">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;


import { Fragment } from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ pageName, prePageLink, prePageName}) => {
  const link = prePageLink;
  return (
    <Fragment>
      <div className="metaportal_fn_pagetitle">
        <div className="container small">
          <div className="pagetitle">
            <p>
              <Link to="/">Home</Link>
              <span className="divider">/</span>
              <Link to={link}>{prePageName}</Link>
              <span className="divider">/</span>
              <span className="text">{pageName}</span>
            </p>
          </div>
        </div>
      </div>{" "}
    </Fragment>
  );
};
export default PageBanner;

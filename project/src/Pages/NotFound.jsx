import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light"  style={{minHeight:'550px'}}>
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for doesn’t exist.
        </p>

        <Link to="/" className="btn btn-primary px-4">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
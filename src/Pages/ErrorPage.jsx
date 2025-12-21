import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div>
        <h1>Opps! An Error Occurred.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to={-1}>
          <button>Go Back</button>
        </NavLink>
      </div>
    </>
  );
};

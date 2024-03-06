import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found " />
          <h3>OOPS!</h3>
          <p>We can't seem to find the page you were looking for</p>
          <Link to="">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return <div></div>;
}

export default Error;

import React, { useState } from "react";
import "./entry.style.css";
import { Login } from "../../components/login/Login";
import { ResetPassword } from "../../components/login copy/ResetPassword";

export const EntryPage = () => {
  const [show, setShow] = useState(true);
  const handleOnShow = () => {
    setShow(!show);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron m-3">
        {show ? (
          <Login handleOnShow={handleOnShow} />
        ) : (
          <ResetPassword handleOnShow={handleOnShow} />
        )}
        {/* <Login /> */}
        {/* <ResetPassword /> */}
      </div>
    </div>
  );
};

import React from "react";

const Container = ({ children, className }) => {
  return <div className={`w-full max-w-screen-lg mx-auto px-4 lg:px-0 ${className}`}>{children}</div>;
};

export default Container;
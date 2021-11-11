import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";

function NotFound() {
  return (
    <>
      <AllPageTopBanner
        title={"404 Not Found"}
        body={
          "The link is broken or the page has been moved. Go back home page and try other pages."
        }
      />
    </>
  );
}

export default NotFound;

import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import ContactMain from "../components/ContactMain";

function Contact() {
  return (
    <>
      <AllPageTopBanner
        title={"Contact Us"}
        body={"Our formulations have proven efficacy"}
      />
      <ContactMain />
    </>
  );
}

export default Contact;

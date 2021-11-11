import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import ContactMain from "../components/ContactMain";

function Contact() {
  return (
    <>
      <AllPageTopBanner
        title={"Contact Us"}
        body={
          "Our formulations have proven efficacy, contain organic ingredients only and are 100% cruelty free."
        }
      />
      <ContactMain />
    </>
  );
}

export default Contact;

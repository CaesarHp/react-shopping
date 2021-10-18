import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialMedia({ socialIconContainer, iconSize }) {
  return (
    <div className={socialIconContainer}>
      <FacebookIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <InstagramIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <TwitterIcon
        fontSize={iconSize}
        style={{ marginRight: 20, cursor: "pointer" }}
      />
      <YouTubeIcon fontSize={iconSize} style={{ cursor: "pointer" }} />
    </div>
  );
}

export default SocialMedia;

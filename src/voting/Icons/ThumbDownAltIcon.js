import React, { Component } from "react";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import StyledBadge from "../constants/StyledBadge";

class ThumbDownAlt extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <ThumbDownAltIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default ThumbDownAlt;

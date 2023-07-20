import React, { Component } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import StyledBadge from "../constants/StyledBadge";

class ThumbUpAlt extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <ThumbUpAltIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default ThumbUpAlt;

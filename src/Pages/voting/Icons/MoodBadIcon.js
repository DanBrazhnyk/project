import React, { Component } from "react";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import StyledBadge from "../constants/StyledBadge";

class MoodBad extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <MoodBadIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default MoodBad;

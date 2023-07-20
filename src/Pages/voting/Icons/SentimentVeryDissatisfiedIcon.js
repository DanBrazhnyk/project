import React, { Component } from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import StyledBadge from "../constants/StyledBadge";

class SentimentVeryDissatisfied extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <SentimentVeryDissatisfiedIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default SentimentVeryDissatisfied;

import React, { Component } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import StyledBadge from "../constants/StyledBadge";

class InsertEmoticon extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <InsertEmoticonIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default InsertEmoticon;

import React, { Component } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyledBadge from "../constants/StyledBadge";

class Favorite extends Component {
  render() {
    const { badgeContent, onClick } = this.props;
    return (
      <>
        <StyledBadge
          badgeContent={badgeContent}
          color="secondary"
          onClick={onClick}
        >
          <FavoriteIcon/>
        </StyledBadge>
      </>
    );
  }
}

export default Favorite;

import React, { Component } from "react";
import Favorite from "../Icons/FavoriteIcon";
import ThumbDownAlt from "../Icons/ThumbDownAltIcon";
import ThumbUpAlt from "../Icons/ThumbUpAltIcon";
import MoodBad from "../Icons/MoodBadIcon";
import SentimentVeryDissatisfied from "../Icons/SentimentVeryDissatisfiedIcon";
import InsertEmoticon from "../Icons/InsertEmoticonIcon";
import { findMax } from "../functions/FindMax";
import { renderSwitch } from "../functions/RenderSwitch";
import Button from "@mui/material/Button";
import styles from "../assets/Voting.module.css";

class Voting extends Component {
  state = {
    iconCounts: {
      favorite: 0,
      thumbDown: 0,
      thumbUp: 0,
      MoodBad: 0,
      SentimentVeryDissatisfied: 0,
      InsertEmoticon: 0,
    },
    showSwitch: false,
  };
  incrementHandler = (icon) => {
    const { iconCounts } = this.state;
    this.setState((prevState) => ({
      iconCounts: {
        ...prevState.iconCounts,
        [icon]: iconCounts[icon] + 1,
      },
    }));
  };
  render() {
    const { iconCounts } = this.state;
    const maxIcon = findMax(iconCounts);
    return (
      <div className="container">
        <div className={styles.containerIcons}>
          <Favorite
            badgeContent={iconCounts.favorite}
            onClick={() => this.incrementHandler("favorite")}
          />
          <ThumbDownAlt
            badgeContent={iconCounts.thumbDown}
            onClick={() => this.incrementHandler("thumbDown")}
          />
          <ThumbUpAlt
            badgeContent={iconCounts.thumbUp}
            onClick={() => this.incrementHandler("thumbUp")}
          />
          <MoodBad
            badgeContent={iconCounts.MoodBad}
            onClick={() => this.incrementHandler("MoodBad")}
          />
          <InsertEmoticon
            badgeContent={iconCounts.InsertEmoticon}
            onClick={() => this.incrementHandler("InsertEmoticon")}
          />
          <SentimentVeryDissatisfied
            badgeContent={iconCounts.SentimentVeryDissatisfied}
            onClick={() => this.incrementHandler("SentimentVeryDissatisfied")}
          />
        </div>
        <div className={styles.containerSwitch}>
          <Button
            variant="outlined"
            onClick={() => this.setState({ showSwitch: true })}
          >
            Show most click elem
          </Button>
          <Button
            variant="outlined"
            onClick={() => this.setState({ showSwitch: false })}
          >
            Hide the elem
          </Button>
        </div>
        {this.state.showSwitch && (
          <div className={styles.containerSwitch}>{renderSwitch(maxIcon)}</div>
        )}
      </div>
    );
  }
}

export default Voting;

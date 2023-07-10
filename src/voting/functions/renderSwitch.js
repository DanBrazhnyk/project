import ThumbUpAlt from "../Icons/ThumbUpAltIcon";
import ThumbDownAlt from "../Icons/ThumbDownAltIcon";
import Favorite from "../Icons/FavoriteIcon";
import MoodBad from "../Icons/MoodBadIcon";
import InsertEmoticon from "../Icons/InsertEmoticonIcon";
import SentimentVeryDissatisfied from "../Icons/SentimentVeryDissatisfiedIcon";

export const renderSwitch = (maxIcon) => {
  switch (maxIcon) {
    case "thumbUp":
      return <ThumbUpAlt />;
    case "thumbDown":
      return <ThumbDownAlt />;
    case "favorite":
      return <Favorite />;
    case "MoodBad":
      return <MoodBad />;
    case "SentimentVeryDissatisfied":
      return <SentimentVeryDissatisfied />;
    case "InsertEmoticon":
      return <InsertEmoticon />;
    default:
      return null;
  }
};

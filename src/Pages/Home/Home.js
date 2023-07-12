import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ProfileContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

const ProfileAvatar = styled(Avatar)({
  width: "150px",
  height: "150px",
  marginBottom: "20px",
});

const Home = () => {
  return (
    <ProfileContainer>
      <ProfileAvatar src="your-profile-image.jpg" alt="Profile Image" />
      <Typography variant="h4" gutterBottom>
        Your Name
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Software Developer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
        consequat velit. Aenean vel velit vitae nisi tincidunt congue non eu
        ante. Curabitur vestibulum, urna vel commodo fringilla, purus mi
        tincidunt urna, at pharetra nisl ligula eu tellus. In hac habitasse
        platea dictumst. Aliquam erat volutpat. Maecenas non pellentesque
        nunc. Mauris ac rutrum lectus. Vivamus varius nunc a diam volutpat
        placerat.
      </Typography>
    </ProfileContainer>
  );
};

export default Home;

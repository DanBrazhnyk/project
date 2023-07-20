import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import profile from "./Image/profile.jpg";
import Paper from "@mui/material/Paper";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./assets/Home.module.css";
import { Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [activeButton, setActiveButton] = useState("about");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <Paper
      className={styles.styledPaper}
      style={{ backgroundColor: "#e2f4ff", position: "relative" }}
      elevation={20}
    >
      <Paper className={styles.profileInfo}>
        <Box className={styles.flexContainer}>
          <Avatar
            sx={{ width: 130, height: 130, marginLeft: -4 }}
            src={profile}
            alt="Profile Image"
          />
          <Box className={styles.fieldsetContainer}>
            <Typography className={styles.profileText} style={{marginLeft:"8px",marginTop:"3px"}} variant="body1" fontSize={24} >
              Danylo Brazhnyk
            </Typography>
            <fieldset className={styles.profileFieldset}>
              <legend>Email</legend>
              <Typography
                className={styles.profileSubText}
                variant="body1"
                fontSize={14}
              >
                danylo.brazhnyk@gmail.com
              </Typography>
            </fieldset>
            <fieldset className={styles.profileFieldset}>
              <legend>Date of birth</legend>
              <Typography
                className={styles.profileSubText}
                variant="body1"
                fontSize={14}
              >
                04.10.2002
              </Typography>
            </fieldset>
            <fieldset className={styles.profileFieldset}>
              <legend>City</legend>
              <Typography
                className={styles.profileSubText}
                variant="body1"
                fontSize={14}
              >
                Warsaw, Masovian Voivodeship
              </Typography>
            </fieldset>
          </Box>
        </Box>
      </Paper>
      <Paper
        className={styles.buttonContainer}
        style={{ borderRadius: "16px" }}
      >
        <motion.button
          className={`${styles.profileButton} ${
            activeButton === "about" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("about")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1000, damping: 10 }}
        >
          About
        </motion.button>
        <motion.button
          className={`${styles.profileButton} ${
            activeButton === "activity" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("activity")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1000, damping: 10 }}
        >
          Activity
        </motion.button>
        <motion.button
          className={`${styles.profileButton} ${
            activeButton === "projects" ? styles.activeButton : ""
          }`}
          onClick={() => handleButtonClick("projects")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 1000, damping: 10 }}
        >
          Projects
        </motion.button>
      </Paper>
      <AnimatePresence initial={false}> 
        {activeButton === "about" && (
          <motion.div
            key="about"
            style={{
              top: "47%",
              position: "absolute",
            }}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              className={styles.profileDescription}
              style={{ borderRadius: "14px" }}
            >
              <fieldset className={styles.aboutStyle}>
                <legend >
                  BIO
                </legend>
                <Typography
                  className={styles.typographyStyle}
                  variant="body1"
                  fontSize={14}
                >
                  Motivated Junior Front-End Developer with a passion for
                  creating interactive and visually appealing web applications.
                  Skilled in JavaScript, React, and Material UI. Strong
                  problem-solving and analytical skills, coupled with a quick
                  learning ability and a desire for continuous personal and
                  professional growth.
                </Typography>
              </fieldset>
            </Paper>
            <Paper
              className={styles.profileLinks}
              style={{ borderRadius: "14px" }}
            >
              <fieldset className={styles.aboutWeb}>
                <legend >
                  ON THE WEB
                </legend>
                <Box className={styles.btnLink}>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/danylo-brazhnyk-a7864826a"
                  >
                    <LinkedInIcon
                      className={styles.btnLinkedin}
                      style={{ width: "33px", height: "33px" }}
                    />
                  </Link>
                  <Link target="_blank" href="https://github.com/DanBrazhnyk">
                    <GitHubIcon
                      className={styles.btn}
                      style={{ width: "33px", height: "33px" }}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://instagram.com/danya_b10?igshid=OGQ5ZDc2ODk2ZA=="
                  >
                    <InstagramIcon
                      className={styles.btn}
                      style={{ width: "33px", height: "33px" }}
                    />
                  </Link>
                  <Link target="_blank" href="https://t.me/danya_b10">
                    <TelegramIcon
                      className={styles.btn}
                      style={{ width: "33px", height: "33px" }}
                    />
                  </Link>
                </Box>
              </fieldset>
            </Paper>
          </motion.div>
        )}
        {activeButton === "activity" && (
          <motion.div
            key="activity"
            style={{ width: "100%", top: "50%", position: "absolute" }}
            initial={{
              x: 200,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              className={styles.profileDescription}
              style={{ borderRadius: "14px" }}
            >
              <fieldset className={styles.aboutStyle}>
                <legend>
                  lol
                </legend>
                <Typography
                  className={styles.typographyStyle}
                  variant="body1"
                >
                  Motivated Junior Front-End
                </Typography>
              </fieldset>
            </Paper>
          </motion.div>
        )}
        {activeButton === "projects" && (
          <motion.div
            key="projects"
            style={{ width: "100%", top: "50%", position: "absolute" }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              className={styles.profileDescription}
              style={{ borderRadius: "14px" }}
            >
              <fieldset className={styles.aboutStyle}>
                <legend >
                  My projects
                </legend>
                <motion.ul>
                  <motion.li
                    initial={{ x: -48, opacity: 0.2 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ display: "none" }}
                    transition={{ duration: 0.6 }}
                  >
                    React functional project
                  </motion.li>
                  <Typography
                    className={styles.typographyStyle}
                    variant="body1"
                  >
                    Motivated Junior Front-End
                  </Typography>
                  <motion.li
                    initial={{ x: -48, opacity: 0.2 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ display: "none" }}
                    transition={{ duration: 0.6 }}
                  >
                    React online shop
                  </motion.li>
                  <Typography
                    className={styles.typographyStyle}
                    variant="body1"
                  >
                    in process
                  </Typography>
                  <motion.li
                    initial={{ x: -48, opacity: 0.0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ display: "none" }}
                    transition={{ duration: 0.6 }}
                  >
                    React Native online shop
                  </motion.li>
                  <Typography
                    className={styles.typographyStyle}
                    variant="body1"
                  >
                    in process
                  </Typography>
                </motion.ul>
              </fieldset>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Paper>
  );
};

export default React.memo(Home);

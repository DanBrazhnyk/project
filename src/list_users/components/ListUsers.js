import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import styles from "../assets/List.module.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [expandedCardIds, setExpandedCardIds] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAlbumClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log(error));

    setSelectedUserId(userId);
    setExpandedCardIds((prevIds) => [...prevIds, userId]);
  };

  const handlePhotosClick = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.log(error));

    setSelectedAlbumId(albumId);
  };

  const isCardExpanded = (cardId) => {
    return expandedCardIds.includes(cardId);
  };

  return (
    <div className={styles.container}>
      <Typography
        className={styles.typographyStyle}
        gutterBottom
        variant="h5"
        component="div"
        style={{ marginLeft: "650px" }}
      >
        List of users
      </Typography>
      {users.map((user) => (
        <Card
        className={styles.cardStyle}
          style={{height: isCardExpanded(user.id) ? "auto" : "fit-content",}}
          key={user.id}
        >
          <Typography
            className={styles.typographyStyle}
            gutterBottom
            variant="h5"
            component="div"
          >
            {user.name}
          </Typography>
          <Typography
            className={styles.typographyStyle}
            variant="body2"
            color="text.secondary"
          >
            Email: {user.email}
          </Typography>
          <Button
          style={{margin: '0 auto', display: "flex",marginBottom:"10px"}}
            onClick={() => handleAlbumClick(user.id)}
            variant="contained" 
            color="success"
          >
            Album
          </Button>
          {selectedUserId === user.id && (
            <Card>
              <Typography
                className={styles.typographyStyle}
                gutterBottom
                variant="h5"
                component="div"
              >
                User albums {user.name}
              </Typography>
              {albums.map((album) => (
                <Card key={album.id}>
                  <hr />
                  <Typography
                    className={styles.typographyStyle}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Name of album: {album.title}
                  </Typography>
                  <Button
                  style={{margin: '0 auto', display: "flex",marginBottom:"10px"}}
                    onClick={() => handlePhotosClick(album.id)}
                    variant="contained" 
                    color="success"
                  >
                    Photos
                  </Button>

                  {selectedAlbumId === album.id && (
                    <Card className={styles.typographyStyle}>
                      <hr />
                      <ImageList
                        sx={{width: 500,height: 200,overflowY: "auto"}}
                        cols={3}
                        rowHeight={164}
                      >
                        {photos.map((photo) => (
                          <ImageListItem key={photo.id}>
                            <img src={photo.url} alt="error" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Card>
                  )}
                </Card>
              ))}
            </Card>
          )}
        </Card>
      ))}
    </div>
  );
};

export default UserList;

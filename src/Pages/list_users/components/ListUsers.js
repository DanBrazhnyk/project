import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAlbumById,fetchPhotosById} from "../../../slice/userSlice/UserSlice";
import {Button,Card,CircularProgress,Grid,ImageList,ImageListItem,Typography} from "@mui/material";
import styles from "../assets/List.module.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userAlbums, setUserAlbums] = useState({});
  const [albumPhotos, setAlbumPhotos] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [loadingPhotos, setLoadingPhotos] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAlbumClick = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
      return;
    }

    setSelectedUser(userId);

    if (!userAlbums[userId]) {
      dispatch(fetchAlbumById(userId)).then((action) => {
        setUserAlbums((prevState) => ({
          ...prevState,
          [userId]: action.payload,
        }));
      });
    }
  };

  const handlePhotosClick = (albumId) => {
    if (albumPhotos[albumId]) {
      return;
    }

    setLoadingPhotos((prevState) => ({
      ...prevState,
      [albumId]: true,
    }));

    dispatch(fetchPhotosById(albumId)).then((action) => {
      setAlbumPhotos((prevState) => ({
        ...prevState,
        [albumId]: action.payload,
      }));

      setLoadingPhotos((prevState) => ({
        ...prevState,
        [albumId]: false,
      }));
    });
  };

  const errorMessage = useSelector((state) => state.users.errorMessage);

  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={4} md={4} lg={6}>
            <Card sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6">{user.name}</Typography>
              {selectedUser === user.id ? (
                <>
                  {userAlbums[user.id] ? (
                    userAlbums[user.id].map((album) => (
                      <div key={album.id} style={{ marginTop: "16px" }}>
                        <Typography variant="subtitle1">
                          {album.title}
                        </Typography>
                        {albumPhotos[album.id] ? (
                          <>
                            {loadingPhotos[album.id] ? (
                              <CircularProgress />
                            ) : (
                              <ImageList
                                cols={3}
                                sx={{
                                  overflow: "hidden",
                                  borderRadius: "8px",
                                }}
                              >
                                {albumPhotos[album.id].map((photo) => (
                                  <ImageListItem
                                    key={photo.id}
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      cursor: "pointer",
                                      maxWidth: "150px",
                                      maxHeight: "150px",
                                    }}
                                  >
                                    <img
                                      src={photo.thumbnailUrl}
                                      alt={photo.title}
                                      style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      }}
                                    />
                                  </ImageListItem>
                                ))}
                              </ImageList>
                            )}
                          </>
                        ) : (
                          <Button
                            onClick={() => handlePhotosClick(album.id)}
                            disabled={loadingPhotos[album.id]}
                            variant="contained"
                            sx={{ mt: 2 }}
                          >
                            {loadingPhotos[album.id] ? (
                              <CircularProgress size={20} />
                            ) : (
                              "Photos"
                            )}
                          </Button>
                        )}
                      </div>
                    ))
                  ) : (
                    <CircularProgress />
                  )}
                  <Button
                    onClick={handleAlbumClick}
                    variant="outlined"
                    sx={{ mt: 2 }}
                  >
                    Close
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => handleAlbumClick(user.id)}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Albums
                </Button>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
      {errorMessage && <Typography>Error loading data</Typography>}
    </div>
  );
};

export default React.memo(UserList);

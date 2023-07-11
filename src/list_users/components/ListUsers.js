import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import styles from "../assets/List.module.css";
import { useDispatch,useSelector} from "react-redux";
import { fetchAlbumById,fetchPhotosById} from "../userSlice/userSlice";
import CircularProgress from '@mui/material/CircularProgress';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const loading = useSelector((state) =>state.users.loading)
  const errorMessage = useSelector((state) => state.users.errorMessage)
  const albums = useSelector((state) => state.users.albums)
  const photos = useSelector((state) => state.users.photos)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);;

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
          style={{height:"auto" }}
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
            onClick={() => dispatch(fetchAlbumById(user.id))}
            variant="contained" 
            color="success"
          >
            Album
          </Button>
          {albums.map((album) => (
            <Card  key={album.id}>
              <Typography
                className={styles.typographyStyle}
                gutterBottom
                variant="h5"
                component="div"
              >
                User albums
              </Typography>
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
                    onClick={() => dispatch(fetchPhotosById(album.id))}
                    variant="contained" 
                    color="success"
                  >
                    Photos
                  </Button>  
                        {photos.map((photo) => (
                    <Card className={styles.typographyStyle}>
                      <hr />
                      <ImageList
                        sx={{width: 500,height: 200,overflowY: "auto"}}
                        cols={3}
                        rowHeight={164}
                      >
                          <ImageListItem key={photo.id}>
                            <img src={photo.url} alt="error" />
                          </ImageListItem>
                      </ImageList>
                    </Card>
                        ))}
              </Card>
              ))}
            </Card>
          
      ))}
    </div>
  );
};

export default UserList;

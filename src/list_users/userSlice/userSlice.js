import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlbumById = createAsyncThunk(
"users/fetchAlbumById",
 async(userId)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const parsedData =await response.json()
    return parsedData;
 }
)
export const fetchPhotosById = createAsyncThunk(
    "users/fetchPhotosById",
     async(albumId)=>{
        const response = await  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        const parsedData =await response.json()

        return parsedData;
     }
    )

const initialState = {
  loading: false,
  albums:[],
  photos:[],
  errorMessage:false
};

const Users = createSlice({
  name: "users",
  initialState,
  reducers: { },
  extraReducers:(builder)=>{
  builder.addCase(fetchAlbumById.pending,(state)=>{
    state.loading =true
  })
  .addCase(fetchAlbumById.fulfilled,(state,action)=>{
    state.loading=false
    state.albums.push(...action.payload)
  }) 
  .addCase(fetchAlbumById.rejected,(state)=>{
    state.loading = false
    state.errorMessage=true
  })
  .addCase(fetchPhotosById.pending,(state)=>{
    state.loading =true
  }) 
  .addCase(fetchPhotosById.fulfilled,(state,action)=>{
    state.loading =false
    state.photos.push(...action.payload)
  })
  .addCase(fetchPhotosById.rejected,(state)=>{
    state.loading = false
    state.errorMessage=true
  })
  }
});

export default Users.reducer;
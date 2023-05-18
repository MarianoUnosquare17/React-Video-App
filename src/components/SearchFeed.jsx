import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  //Use Effect is a lifeCycle hook that runs as soon as the component is rendered
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
    //I added the selected category in the array so that whenever a new category is selected the useEffect hook runs again
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Results: <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

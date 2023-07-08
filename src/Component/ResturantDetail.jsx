import { Box, Button, IconButton, List, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { useResturant } from "../Context/ResturantContext";
import { useEffect, useState } from "react";
import { ReviewModal } from "./ReviewModal";
import StarRateIcon from "@mui/icons-material/StarRate";

export const ResturantDetail = () => {
  const { resturantStates, resturantDispatch } = useResturant();
  console.log(
    "🚀 ~ file: ResturantDetail.jsx:11 ~ ResturantDetail ~ resturantStates:",
    resturantStates.resturantDetail
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { resturantId } = useParams();

  const navigate = useNavigate();
  const getResturantDetail = () => {
    const filteredData = resturantStates?.allresturants?.filter(
      (resturant) => resturant.id == resturantId
    );

    resturantDispatch({ type: "GET_RESTURANT_DETAIL", payload: filteredData });
  };
  const addReview = () => {
    handleOpen();
  };
  useEffect(() => {
    getResturantDetail();
  }, []);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box>
          {resturantStates?.resturantDetail?.map((resturant) => (
            <Box key={resturant.id}>
              <Typography variant="h2">{resturant.name}</Typography>
              <List sx={{ display: "flex", flexDirection: "row" }}>
                {resturant?.menu?.map((menuDetail, idx) => (
                  <Typography key={idx}>{menuDetail.name}</Typography>
                ))}
              </List>
              <Typography>{resturant.address}</Typography>
              <Typography>Average Rating:{resturant.averageRating}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Button onClick={() => addReview()}>Add Review</Button>
          <ReviewModal
            open={open}
            onClose={handleClose}
            resturantId={resturantId}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="h5">Reviews</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {resturantStates?.resturantDetail?.map((resturant) => (
            <div key={resturant.id}>
              {resturant?.ratings?.map((rating, idx) => (
                <Box key={idx} sx={{ display: "flex", flexDirection: "row" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <img src={rating.pp} alt="profile" />
                    <Typography>{rating.revName}</Typography>
                  </Box>

                  <Typography>{rating.comment}</Typography>
                  <Button
                    variant="contained"
                    startIcon={<StarRateIcon />}
                    sx={{ height: "20px", width: "5px" }}
                  >
                    {rating.rating}
                  </Button>
                </Box>
              ))}
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

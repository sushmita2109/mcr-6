import { Box, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useResturant } from "../Context/ResturantContext";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export const ReviewModal = ({ open, onClose, resturantId }) => {
  const { resturantStates, resturantDispatch } = useResturant();
  const [review, setReview] = useState({
    rating: "",
    comment: "",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
    revName: "Sushmita",
  });

  const handleChange = (e) => {
    setReview((prev) => ({
      ...prev,
      rating: e.target.value,
    }));
  };
  const handleComment = (e) => {
    setReview((prev) => ({
      ...prev,
      comment: e.target.value,
    }));
  };
  const saveReview = () => {
    resturantDispatch({
      type: "SAVE_REVIEW",
      payload: review,
      resturantId: resturantId,
    });
    onClose();
  };
  return (
    <Modal open={open}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          background: "white",
          width: "500px",
          marginLeft: "390px",
          flexDirection: "column",
          padding: "8px",
        }}
      >
        <InputLabel id="demo-simple-select-label">Ratting</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={review.rating}
          label="Ratting"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <TextField
          placeholder="enter comment"
          onChange={(e) => handleComment(e)}
        />
        <Button onClick={() => onClose()}>Close</Button>
        <Button onClick={() => saveReview()}>Save</Button>
      </Box>
    </Modal>
  );
};

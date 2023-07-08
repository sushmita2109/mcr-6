import { Button, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { useResturant } from "../Context/ResturantContext";

export const HomeFeed = () => {
  const { resturantStates, resturantDispatch } = useResturant();
  console.log(
    "🚀 ~ file: HomeFeed.jsx:9 ~ HomeFeed ~ resturantStates:",
    resturantStates.filteredResturants
  );

  const getResturants = (cusine) => {
    const filteredData = resturantStates?.allresturants?.filter(
      (resturant) => resturant.cuisine_id === cusine.id
    );
    resturantDispatch({ type: "GET_RESTURANT", payload: filteredData });
  };

  return (
    <Box>
      <Typography variant="h1">Food Odering App</Typography>
      <Typography variant="h3">Select your cusine </Typography>
      {resturantStates?.allcusine?.map((cusine) => (
        <Button key={cusine.id} onClick={() => getResturants(cusine)}>
          {cusine.name}
        </Button>
      ))}
      {resturantStates?.filteredResturants?.map((resturant) => (
        <Box key={resturant.id}>
          <Typography variant="h5">Dishes by {resturant.name}</Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              padding: "8px",
            }}
          >
            {resturant.menu.map((menudetail, idx) => (
              <Card key={idx} sx={{ maxWidth: "500px" }}>
                <CardMedia
                  sx={{ height: "200px ", width: "200px" }}
                  image={menudetail.imgSrc}
                />
                <CardContent>
                  <Typography variant="body-1"> {menudetail.name}</Typography>
                  <Typography>{menudetail.price}</Typography>
                  <Typography>{resturant.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

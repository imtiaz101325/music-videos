import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function DisplayArea({ items }) {
  return (
    <Grid container spacing={2} p={2}>
      {items?.map(({ image_url, title, id }) => (
        <Grid item xs={12} sm={4} md={3} key={id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              width="200"
              image={image_url}
              alt={title}
            />
            <CardContent>
              <Typography>{title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

DisplayArea.propTyes = {
  items: PropTypes.array.isRequired,
};

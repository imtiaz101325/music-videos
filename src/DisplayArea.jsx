import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

export function DisplayArea({ items }) {
  return (
    <Grid container spacing={2} p={2}>
      {items?.map(({ image_url, title, id, artist, genre, release_year }) => (
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
              <Typography variant="h6">{title}</Typography>
              <Typography variant="subtitle1">{artist}</Typography>
            </CardContent>
            <Box sx={{ padding: "8px", display: 'flex', gap: 0.5 }}>
              {genre && <Chip label={genre} />}
              <Chip label={release_year} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

DisplayArea.propTyes = {
  items: PropTypes.array.isRequired,
};

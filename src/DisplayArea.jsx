import { array, string } from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Warning } from "@mui/icons-material";

export function DisplayArea({ items, searchText }) {
  function processText(text) {
    if (searchText) {
      return text
        .split(new RegExp(searchText, "ig"))
        .join(`<span>${searchText}</span>`);
    }

    return text;
  }

  if (!items?.length) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <Warning color="warning" sx={{ fontSize: "128px" }} />
        <Typography>
          No results found!
        </Typography>
        <Typography>Try changing the filters.</Typography>
      </Box>
    );
  }

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
              <Typography
                variant="h6"
                dangerouslySetInnerHTML={{
                  __html: processText(title),
                }}
                sx={{ "& span": { background: "red" } }}
              />
              <Typography
                variant="subtitle1"
                dangerouslySetInnerHTML={{
                  __html: processText(artist),
                }}
                sx={{ "& span": { background: "red" } }}
              />
            </CardContent>
            <Box sx={{ padding: "8px", display: "flex", gap: 0.5 }}>
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
  items: array.isRequired,
  searchText: string,
};

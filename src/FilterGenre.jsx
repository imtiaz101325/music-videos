import { useEffect, useState } from "react";
import { array, func } from "prop-types";
import {
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";

export default function FilterGenre({ setFilters, genreList }) {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    if (genre?.length) {
      setFilters((filters) => ({
        ...filters,
        genre,
      }));
    }
  }, [genre, setFilters]);

  function handleSelect(event) {
    setGenre(event?.target?.value);
  }

  return (
    <Grid item md={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
        <Select
          multiple
          value={genre}
          defaultValue=""
          onChange={handleSelect}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {selected.map((selected) => (
                <Chip
                  key={selected}
                  label={genreList?.find(({ id }) => id === selected)?.name}
                />
              ))}
            </Box>
          )}
        >
          {genreList?.map(({ name, id }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

FilterGenre.propTypes = {
  setFilters: func.isRequired,
  genreList: array,
};

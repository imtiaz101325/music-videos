import { useState } from "react";
import { object, array, func, bool } from "prop-types";
import {
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";

import FilterYear from "./FilterYear";

export default function Filters({
  setFilters,
  yearList,
  genreList
}) {
  const [genre, setGenre] = useState([]);

  function handleGenreSelect(event) {
    setGenre(event?.target?.value);
  }
  
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <TextField
          fullWidth
          label="Search"
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
        />
      </Grid>
      <FilterYear
        setFilters={setFilters}
        yearList={yearList}
      />
      <Grid item md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
          <Select
            multiple
            value={genre}
            onChange={handleGenreSelect}
            input={<OutlinedInput label="Chip" />}
            renderValue={(selected) => (
              <Box>
                {selected.map(({ name, id }) => (
                  <Chip key={id} label={name} />
                ))}
              </Box>
            )}
          >
            {genreList?.map(({ name, id }) => (
              <MenuItem key={id} value={{ name, id }}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

Filters.propTypes = {
  data: object,
  results: array.isRequired,
  setResults: func.isRequired,
  hasFilters: bool.isRequired,
  setHasFilters: func.isRequired,
};

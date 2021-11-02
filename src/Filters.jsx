import { useEffect, useMemo, useState } from "react";
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

export function Filters({
  data,
  results,
  setResults,
  hasFilters,
  setHasFilters,
}) {
  const targetData = hasFilters ? results : data?.videos;

  const [genre, setGenre] = useState([]);
  const [year, setYear] = useState();

  useEffect(() => {
    if (year) {
      setResults(
        targetData.filter(({ release_year }) => release_year === year)
      );
    }
  }, [targetData, year, setResults]);

  const yearsList = useMemo(
    function getYears() {
      const years = data?.videos?.map(({ release_year }) => release_year);
      const unique = new Set(years);

      return Array.from(unique).sort();
    },
    [data]
  );

  function handleGenreSelect(event) {
    setGenre(event?.target?.value)
  }

  function handleYearSelect(event) {
    setYear(event?.target?.value);
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
      <Grid item md={6}>
        <FormControl fullWidth>
          <InputLabel>Year</InputLabel>
          <Select value={year} onChange={handleYearSelect}>
            {yearsList?.map((year) => (
              <MenuItem value={year} key={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
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
            {data?.genres?.map(({ name, id }) => (
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

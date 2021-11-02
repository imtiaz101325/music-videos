import { array, func } from "prop-types";
import { Grid, TextField } from "@mui/material";

import FilterYear from "./FilterYear";
import FilterGenre from "./FilterGenre";

export default function Filters({ setFilters, yearList, genreList }) {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item md={12}>
        <TextField fullWidth label="Search" />
      </Grid>
      <FilterYear setFilters={setFilters} yearList={yearList} />
      <FilterGenre setFilters={setFilters} genreList={genreList} />
    </Grid>
  );
}

Filters.propTypes = {
  setFilters: func.isRequired,
  yearList: array,
  genreList: array,
};

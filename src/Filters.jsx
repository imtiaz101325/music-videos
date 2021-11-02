import { array, func } from "prop-types";
import { Grid } from "@mui/material";

import FilterYear from "./FilterYear";
import FilterGenre from "./FilterGenre";
import FilterText from "./FilterText";

export default function Filters({ setFilters, yearList, genreList }) {
  return (
    <Grid container spacing={2} p={2}>
      <FilterText setFilters={setFilters} />
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

import { func } from "prop-types";
import { Grid, TextField } from "@mui/material";

export default function FilterText({ setFilters }) {
  function handleChange(event) {
    setFilters(filters => ({
      ...filters,
      search: event?.target?.value
    }))
  }

  return (
    <Grid item md={12}>
      <TextField fullWidth label="Search" onChange={handleChange} />
    </Grid>
  );
}

FilterText.propTypes = {
  setFilters: func.isRequired
};

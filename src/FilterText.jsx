import { func } from "prop-types";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function FilterText({ setFilters }) {
  function handleChange(event) {
    setFilters((filters) => ({
      ...filters,
      search: event?.target?.value
    }));
  }

  return (
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Search"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

FilterText.propTypes = {
  setFilters: func.isRequired,
};

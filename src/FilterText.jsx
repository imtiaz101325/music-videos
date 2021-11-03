import { func } from "prop-types";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useMemo } from "react";
import { throttle } from "lodash";

export default function FilterText({ setFilters }) {
  const handleChange = useMemo(
    () =>
      throttle(function handleChange(event) {
        setFilters((filters) => ({
          ...filters,
          search: event?.target?.value,
        }));
      }, 500, { leading: false, trailing: true}),
    [setFilters]
  );

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

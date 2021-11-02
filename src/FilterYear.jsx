import { useEffect, useState } from "react";
import { func, array } from "prop-types";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

export default function FilterYear({ setFilters, yearList }) {
  const [year, setYear] = useState();

  useEffect(() => {
    if (year) {
      setFilters((filters) => ({
        ...filters,
        year,
      }));
    }
  }, [year, setFilters]);

  function handleSelect(event) {
    setYear(event?.target?.value);
  }

  return (
    <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel>Year</InputLabel>
        <Select
          label="Year"
          value={year}
          defaultValue=""
          onChange={handleSelect}
        >
          {yearList?.map((year) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

FilterYear.propTypes = {
  setFilters: func.isRequired,
  yearList: array,
};

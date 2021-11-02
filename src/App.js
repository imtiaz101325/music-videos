import {  useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Typography } from "@mui/material";

import { DisplayArea } from "./DisplayArea";

import useData from "./useData";

import theme from "./theme";
import Filters from "./Filters";

export default function App() {
  const [filters, setFilters] = useState({
    search: '',
    year: null,
    genre: []
  });

  const { data, loading, error } = useData();

  const results = useMemo(() => {
    if (data) {
      let results = data?.videos
      if (filters.search) {
        //TODO:
      }

      if (filters.year) {
        results = results.filter(({ release_year }) => filters.year === release_year)
      }

      if (filters.genre.length) {
        results = results.filter(({ genre_id }) => filters.genre.includes(genre_id))
      }

      return results
    }
  }, [data, filters])

  const yearList = useMemo(
    function getYears() {
      const years = data?.videos?.map(({ release_year }) => release_year);
      const unique = new Set(years);

      return Array.from(unique).sort((a, b) => b - a);
    },
    [data]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Typography variant="h1" textAlign="center">
          Music Videos
        </Typography>
        {loading && "loading..."}
        {error && "error"}
        <Filters
          setFilters={setFilters}
          yearList={yearList}
          genreList={data?.genres}
        />
        <DisplayArea items={results} />
      </div>
    </ThemeProvider>
  );
}

import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Typography } from "@mui/material";

import { DisplayArea } from "./DisplayArea";

import useData from "./useData";

import theme from "./theme";
import { Filters } from "./Filters";

export default function App() {
  const [results, setResults] = useState([]);
  const [hasFilters, setHasFilters] = useState(false);

  const { data, loading, error } = useData();

  useEffect(() => {
    if (data?.videos) {
      setResults(data.videos);
    }
  }, [data]);

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
          data={data}
          results={results}
          setResults={setResults}
          hasFilters={hasFilters}
          setHasFilters={setHasFilters}
        />
        <DisplayArea items={results} />
      </div>
    </ThemeProvider>
  );
}

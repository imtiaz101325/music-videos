import { CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { DisplayArea } from "./DisplayArea";
import useData from "./useData";

const AppWrapper = styled("div")({});

export default function App() {
  const { data, loading, error } = useData();

  return (
    <>
      <CssBaseline />
      <AppWrapper>
        <Typography variant="h1" textAlign="center">
          Music Videos
        </Typography>
        {loading && "loading..."}
        {error && "error"}
        <DisplayArea items={data?.videos} />
      </AppWrapper>
    </>
  );
}

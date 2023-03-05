import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useQueryClient } from "react-query";
import { Stack, TextField, Chip } from "@mui/material";
import PodcastSection from "./PodcastSection";

const PodcastList = () => {
  const queryClient = useQueryClient();
  const podcasts: any = queryClient.getQueryData("podcasts");
  const [podcastsFiltered, setPodcastsFiltered] = useState<any[]>(podcasts);

  const [formValues, handleInputChange] = useForm({ filter: "" });
  const { filter } = formValues;

  useEffect(() => {
    filter === ""
      ? setPodcastsFiltered(podcasts)
      : setPodcastsFiltered(
          podcasts.filter(
            (podcast: any) =>
              podcast["im:name"].label
                .toLowerCase()
                .includes(filter.toLowerCase()) ||
              podcast["im:artist"].label
                .toLowerCase()
                .includes(filter.toLowerCase())
          )
        );
  }, [formValues]);

  return (
    <>
      <Stack
        alignItems="center"
        margin="20px 0"
        direction="row"
        justifyContent="end"
        gap="10px"
      >
        <Chip label={podcastsFiltered.length} color="primary" size="small" />
        <TextField
          variant="outlined"
          name="filter"
          onChange={handleInputChange}
          size="small"
          label="Filter podcast..."
          disabled={!podcasts}
          value={filter}
        />
      </Stack>
      <PodcastSection podcasts={podcastsFiltered} />
    </>
  );
};

export default PodcastList;

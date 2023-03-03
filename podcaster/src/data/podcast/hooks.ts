import { useState } from "react";
import { useQuery } from "react-query";
import { get100Podcast } from "./podcast";

export const usePodcastOperations = () => {
    const {data, isLoading, error } = useQuery(['podcasts'], () => get100Podcast());

    return {
        podcasts: data,
        isLoading,
        error
    }
};
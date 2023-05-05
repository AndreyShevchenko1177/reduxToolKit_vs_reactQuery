import {useQuery} from "react-query";
import {fetchData} from "../api";

export const useFetchCats = (id) => {
    console.log('run ')
    const url = 'https://catfact.ninja/fact';
    const {data, error, isLoading} = useQuery(
        'fetchCats',
        () => fetchData(url),
        {
            // cacheTime: 5000,
            // enabled: id > 3,
            placeholderData: {data: {fact: ''}}
        }
    );

    // const formatedData = format(Data);

    return {data: data.data, error, isLoading}
};


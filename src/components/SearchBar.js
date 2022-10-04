import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { TextField, Stack, Button, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { fetchData, config, fetchData2 } from '../utils/fetchData';

import jsonIndex from '../assets/json_index.json';
import dbIndex from '../assets/db_index.json';

const DEFAULT_SEARCH_TEXT = "";
const indexes = {
    indexPDF: "index-pdf-demo",
    indexDB: "index-db-demo"
}

const SearchBar = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const lastSearchText = state?.searchText || DEFAULT_SEARCH_TEXT;

    const [searchText, setSearchText] = useState(lastSearchText);
    // const [results, setResults] = useState([]);

    /**
     * Fetchs data from APIs
     */
    const fetchResults = async () => {

        var data = [];

        for (const [key, index] of Object.entries(indexes)) {
            const searchParam = searchText === "" ? "*" : searchText;
            const url = `${process.env.REACT_APP_API_BASE_URL}/indexes/${index}/` +
                `docs?api-version=${process.env.REACT_APP_API_VERSION}&search=${searchParam}`;

            const fetchConfig = {};
            Object.assign(fetchConfig, config);
            fetchConfig.url = url;

            // data.index = await fetchData(fetchConfig);
            // data[index] = await fetchData2(fetchConfig);

            if (index === "index-db-demo") {
                const dbIndexChg = [];

                dbIndex.value.forEach(element => {

                    const dbData = {}
                    const description = {}

                    for (const [key, value] of Object.entries(element)) {
                        switch (key) {
                            case '@search.score':
                                dbData[key] = value;
                                break;
                            case 'id':
                                dbData.ID = value;
                                break;
                            default:
                                description[key] = value;
                        }
                    }

                    dbData.description = description;
                    dbIndexChg.push(dbData);

                });

                data = data.concat(dbIndexChg);
            }
            else {
                data = data.concat(jsonIndex.value);
            }
        }
        return data;
    }


    /**
     * Handles  search text updates.
     * @param {*} e 
     */
    const onChange = e => {
        setSearchText(e.target.value);
    }

    /**
     * Handles page redirection.
     * @param {*} e 
     */
    const onKeyDown = e => {
        if (e.code === 'Enter')
            goToResultScreen();
    };

    /**
     * Handles page redirection.
     */
    const onClick = () => {
        goToResultScreen();
    };

    /**
     * Redirects to ResultScreen.
     */
    const goToResultScreen = () => {
        fetchResults()
            .then((data) =>
                navigate('/result', { state: { results: data, searchText: searchText } })
            );
    }

    return (
        <Stack direction="row">
            {/* <Autocomplete
                size="small"
                renderInput={(params) => <TextField {...params} label="Movie" />}
            /> */}
            <TextField
                onKeyDown={onKeyDown}
                onChange={onChange}
                value={searchText}
                sx={{ bgcolor: 'secondary.light' }}
                fullWidth={true}
                autoFocus
                autoComplete='off'
                placeholder='Search'
                type='text'
                size='small'
            />
            <Button
                onClick={onClick}
                variant="contained"
                disableFocusRipple

                sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        maxWidth: '30px', minWidth: '30px'
                    },
                    [theme.breakpoints.up("sm")]: {
                        maxWidth: '50px', minWidth: '50px'
                    }
                })}
            >
                <SearchIcon />
            </Button >
        </Stack>
    )
};

export default SearchBar;
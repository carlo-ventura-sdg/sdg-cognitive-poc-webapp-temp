import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { TextField, Stack, IconButton, shouldSkipGeneratingVar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { fetchData } from '../utils/fetchData';
import jsonData from '../assets/test.json';

const DEFAULT_SEARCH_TEXT = "*";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState(DEFAULT_SEARCH_TEXT);
    const [results, setResults] = useState(jsonData.value);

    /**
     * Fetchs data from APIs
     */
    const fetchResults = async () => {
        // if (searchText.length < 2) return;

        console.log(`Fetching data: ${searchText}`);
        // const url = `https://searchercloudservices.search.windows.net/indexes/index-pdf-demo/` +
        //     `docs?api-version=2021-04-30-Preview&search=${searchText}`;
        // const data = await fetchData(url);
        // setResults(data);

        // var extensions = [];
        // jsonData.value.forEach(element => {
        //     extensions.indexOf(element.file_extension) === -1 ? 
        //         extensions.push(element.file_extension) : console.log();
        // });
        // console.log(extensions);
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
        fetchResults();
        navigate('/result', { state: { results: results } });
    }

    return (
        <Stack direction="row" >
            <TextField
                sx={{ bgcolor: 'secondary.light' }}
                fullWidth={true}
                onKeyDown={onKeyDown}
                onChange={onChange}
                autoFocus
                autoComplete='off'
                placeholder='Search'
                type='text'
                size='small'
            />
            <IconButton
                color={"primary"}
                disableFocusRipple
                onClick={onClick}
            >
                <SearchIcon />
            </IconButton>
        </Stack>
    )
};

export default SearchBar;
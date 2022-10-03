import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { TextField, Stack, Button, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { fetchData, config, fetchData2 } from '../utils/fetchData';
import jsonData from '../assets/test.json';

const DEFAULT_SEARCH_TEXT = "";
const indexes = {
    indexPDF: "index-pdf-demo",
    indexDB: "index-db-demo"
}

const SearchBar = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { searchText : oldSearchText } = state ?? DEFAULT_SEARCH_TEXT;

    const [searchText, setSearchText] = useState(oldSearchText);
    const [results, setResults] = useState(jsonData.value);

    useEffect(() => {
        setSearchText(oldSearchText);
    }, [oldSearchText]);

    /**
     * Fetchs data from APIs
     */
    const fetchResults = async () => {
        // const fetchConfig = {};
        // Object.assign(fetchConfig, config);
        // fetchConfig.url = `${process.env.REACT_APP_API_BASE_URL}/indexes/${indexes.indexPDF}/` +
        //     `docs?api-version=${process.env.REACT_APP_API_VERSION}&search=${searchText}`;

        // const data = await fetchData(fetchConfig);

        const data = await fetchData2();
        // setResults(data);
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
        navigate('/result', { state: { results: results, searchText: searchText } });
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
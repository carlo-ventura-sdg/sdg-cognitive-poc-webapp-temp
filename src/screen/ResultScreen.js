import React from 'react';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Stack, Pagination, Divider, Box } from '@mui/material';

import Navigation from '../components/Navigation';
import Result from '../components/Result';

const MAX_RESULTS = 10;
const FIRST_PAGE = 1;

const ResultScreen = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { state } = useLocation();
  const { results } = state;

  const [page, setPage] = useState(FIRST_PAGE);
  const [lastPage, setLastPage] = useState(MAX_RESULTS);
  const [firstPage, setFirstPage] = useState();

  // Divides results in pages
  useEffect(() => {
    var last = MAX_RESULTS * page;
    if (last > results.length)
      last = results.length;

    var first = MAX_RESULTS * (page - 1);

    setLastPage(last);
    setFirstPage(first);
  }, [page]);

  /**
   * Handles page updates.
   * @param {*} event 
   * @param {*} value 
   */
  const pageChange = (event, value) => {
    setPage(value);
  }

  return (
    <Box sx={{ color: "transparent" }}>
      <Navigation />
      <Stack alignItems="center">
        {results.slice(firstPage, lastPage).map((result) => {
          return (
            <Box key={result.ID} width='100%'>
              {<Result
                id={result.ID}
                documentNameWithExtension={result.document_name_with_extension ?? ""}
                snippet={result.snippet ?? ""}
                fileExtension={result.file_extension ?? ""}
                documentPath={result.document_path ?? '#'}
                documentName={result.document_name ?? ""}
              />}
              {/* <Divider /> */}
            </Box>
          )
        })}

        {
          results.length > MAX_RESULTS &&
          <Pagination
            count={Math.ceil(results.length / MAX_RESULTS)}
            shape="rounded"
            size={matchesSm ? "large" : "small"}
            color='primary'
            sx={{ margin: '10px 0px 10px 0px' }}
            showFirstButton
            showLastButton
            page={page}
            onChange={pageChange}
          />
        }
      </Stack>
    </Box>
  )

};

export default ResultScreen;

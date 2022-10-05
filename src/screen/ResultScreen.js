import React from 'react';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Stack, Pagination, Box } from '@mui/material';

import Navigation from '../components/Navigation';
import Result from '../components/Result';

const MAX_RESULTS = 10;
const FIRST_PAGE = 1;

const ResultScreen = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const { state } = useLocation();
  const { results, searchText } = state;

  const [page, setPage] = useState(FIRST_PAGE);
  const [pageLastResult, setPageLastResult] = useState(FIRST_PAGE);
  const [pageFirstResult, setPageFirstResult] = useState(FIRST_PAGE);

  // Divides results in pages
  useEffect(() => {
    var last = MAX_RESULTS * page;
    if (last > results.length)
      last = results.length;

    var first = MAX_RESULTS * (page - 1);

    setPageLastResult(last);
    setPageFirstResult(first);
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
    <Box sx={{ backgroundColor: '#97B3BF' }}>
      <Navigation />
      <Stack sx={{ pt: { xs: 10, sm: 12, lg: 14 } }} alignItems="center">
        {results.slice(pageFirstResult, pageLastResult).map((result) => {
          return (
            <Box key={result.ID} width='100%'>
              <Result
                id={result.ID}
                documentNameWithExtension={result.document_name_with_extension ?? ""}
                snippet={result.snippet ?? ""}
                summary={result.summary ?? ""}
                fileExtension={result.file_extension ?? ""}
                documentPath={result.document_path ?? '#'}
                documentName={result.document_name ?? ""}
                spotWord={searchText ?? ""}
              />
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
    </Box >
  )

};

export default ResultScreen;

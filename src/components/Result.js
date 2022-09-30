import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Stack, Box, Typography, Link } from '@mui/material';
import FTIcon from "react-file-type-icons";

const Result = (props) => {

    const theme = useTheme();

    return (
        <Card>
            <CardContent>
                <Stack spacing={{ xs: 1, sm: 2 }} padding='5px'>
                    <Stack direction="row" alignItems='center' spacing={{ xs: 'none', sm: 2 }}>
                        <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                            <FTIcon
                                fileName={props.documentNameWithExtension}
                                size='35px'
                                // color='inherit'//{theme.palette.secondary.dark}
                                colorType='multiColor'
                            />
                        </Box>
                        <Stack>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 1,
                                }}
                            >
                                {props.documentPath}
                            </Typography>
                            <Link href={props.documentPath} underline="hover" variant="h6" target="_blank" rel="noreferrer">
                                {props.documentName}
                            </Link>
                            <Typography variant="subtitle2" sx={{ display: { xs: 'flex', sm: 'none' } }}>
                                {props.fileExtension.substring(1)}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography
                        variant="body2"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}
                    >
                        {props.snippet}
                    </Typography>
                </Stack>
            </CardContent>
        </Card >
    )
}

export default Result
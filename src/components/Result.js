import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Stack, Box, Typography, Link, CardActionArea } from "@mui/material";
import FTIcon from "react-file-type-icons";
import DOMPurify from 'dompurify';

const Result = (props) => {

  const theme = useTheme();

  const [clicked, setClicked] = useState(false);

  /**
 * Make keywords in a text bold
 * @param {*} text a text
 * @param {*} keyword word to be made bold 
 * @returns 
 */
  const makeBold = (text, keyword) => {
    if (keyword == null || keyword == "*") return text;

    const regex = new RegExp(keyword, "gi");
    return text.replace(regex, `<b>${keyword}</b>`);
  }

  return (

    <Card
      onClick={() => setClicked(!clicked)}
      sx={{
        margin: 2,
        borderRadius: 1,
        ':hover': {
          boxShadow: 10
        }
      }}
    >
      <CardActionArea disableTouchRipple> 
        <CardContent>
          <Stack spacing={{ xs: 1, sm: 2 }} padding="5px">
            <Stack direction="row" alignItems="center" spacing={{ xs: "none", sm: 2 }}>
              <Box sx={{ display: { xs: "none", sm: "inline" } }}>
                <FTIcon
                  fileName={props.documentNameWithExtension}
                  size="35px"
                  // color='inherit'//{theme.palette.secondary.dark}
                  colorType="multiColor"
                />
              </Box>
              <Box>
                <Link
                  href={props.documentPath}
                  underline="hover"
                  variant="h6"
                  target="_blank"
                  rel="noreferrer"
                  sx={{}}
                >
                  {props.documentName}
                </Link>
                <Typography variant="caption" sx={{ display: { xs: "flex", sm: "none" } }}>
                  {props.fileExtension.substring(1)}
                </Typography>
              </Box>
            </Stack>

            {clicked ? (
              <Typography
                variant="body2"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(makeBold(props.summary, props.spotWord)) }}
                sx={(theme) => ({
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  [theme.breakpoints.down("sm")]: {
                    WebkitLineClamp: 20,
                  }
                })}
              />
            ) : (
              <Typography
                variant="body2"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {props.snippet}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Result;

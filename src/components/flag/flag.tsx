import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DivAttributes } from "../../interfaces";

export const Flag: FC<DivAttributes> = (props) => {
  return (
    <Stack
      bgcolor="secondary.main"
      borderRadius={1}
      width="100%"
      height="2rem"
      alignItems="center"
      overflow="hidden"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        my="auto"
      >
        <Typography variant="tag" color="white" display="block" ml={1.5}>
          {props.children}
        </Typography>
        <Box
          bgcolor="white"
          height="2rem"
          width="2rem"
          borderRadius={1}
          marginRight={-3.2}
          sx={{
            transform: "rotate(45deg)"
          }}
        />
      </Stack>
    </Stack>
  );
};

import { Box } from "@mui/material";
import { SVGProps } from "react";

import { IconProps } from "./types";

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

const IconFacebook = (props: IconProps) => {
  const { hoverColor } = props;

  return (
    <Box
      display={"flex"}
      border={1}
      borderRadius={"50%"}
      padding={1}
      sx={{
        borderColor: "white",
        ":hover": { borderColor: hoverColor, cursor: "pointer" },
        ":hover .child": {
          fill: hoverColor,
        },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Icon fill={"white"} className={"child"} />
    </Box>
  );
};

export default IconFacebook;

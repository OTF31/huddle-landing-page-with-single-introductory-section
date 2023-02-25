import IconFacebook from "@/components/IconFacebook";
import IconInstagram from "@/components/IconInstagram";
import IconTwitter from "@/components/IconTwitter";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import { Open_Sans, Poppins } from "next/font/google";
import Image from "next/image";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const fontOpenSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const Home = () => {
  const theme = useTheme();
  const { palette, breakpoints, transitions } = theme;
  const { violet, softMagenta } = palette;
  const mobile = useMediaQuery(breakpoints.down("lg"));

  return (
    <main role={"main"}>
      <Box
        minHeight={"100vh"}
        maxWidth={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        bgcolor={violet.main}
        padding={1}
      >
        <Image
          alt={"background image"}
          src={require(`../assets/bg-${mobile ? "mobile" : "desktop"}.svg`)}
          fill
          style={{
            objectFit: mobile ? "fill" : "contain",
            maxWidth: "100%",
          }}
          sizes={"100vw"}
        />
        <Container
          maxWidth={mobile ? "md" : "xl"}
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 2,
            paddingRight: 4,
            zIndex: 1,
            transition: transitions.create(["all"], {
              duration: transitions.duration.standard,
            }),
          }}
        >
          <Image src={require("../assets/logo.svg")} alt={"logo"} />
          <Stack
            direction={mobile ? "column" : "row"}
            spacing={6}
            marginTop={4}
            sx={{
              transition: transitions.create(["direction"], {
                duration: transitions.duration.standard,
              }),
            }}
          >
            <Image
              src={require("../assets/illustration-mockups.svg")}
              alt={"illustration"}
              sizes={"100vw"}
              style={{ alignSelf: "center", maxWidth: "100%", height: "auto" }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={mobile ? "center" : "flex-start"}
            >
              <Typography
                fontSize={"2.5rem"}
                fontFamily={fontPoppins.style.fontFamily}
                fontWeight={600}
                color={"white"}
              >
                Build The Community
              </Typography>
              <Typography
                fontSize={"2.5rem"}
                fontFamily={fontPoppins.style.fontFamily}
                fontWeight={600}
                color={"white"}
              >
                Your Fans Will Love
              </Typography>
              <Typography
                fontFamily={fontOpenSans.style.fontFamily}
                color={"white"}
                marginY={3}
                textAlign={mobile ? "center" : "left"}
              >
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </Typography>
              <Button
                variant={"contained"}
                sx={{
                  textTransform: "capitalize",
                  paddingX: 6,
                  background: "white",
                  color: violet.main,
                  fontFamily: fontPoppins.style.fontFamily,
                  borderRadius: 6,
                  boxShadow: 5,
                  ":hover": { background: softMagenta.main, color: "white" },
                }}
              >
                Register
              </Button>
            </Box>
          </Stack>

          <Stack
            alignSelf={mobile ? "center" : "flex-end"}
            direction={"row"}
            spacing={1.5}
            marginTop={mobile ? 6 : 0}
          >
            <IconFacebook hoverColor={softMagenta.main} />
            <IconTwitter hoverColor={softMagenta.main} />
            <IconInstagram hoverColor={softMagenta.main} />
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;

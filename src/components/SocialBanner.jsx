import { Box, Stack, Typography, IconButton } from "@mui/material";
import { WhatsApp, Telegram, Chat } from "@mui/icons-material";

export default function SocialBanner() {
  const iconStyle = {
    border: "1px solid #ffffff70",
    color: "#ffffff",
    "&:hover": { backgroundColor: "#ffffff20" },
  };

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "30px" }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: "28px", lg: "60px" },
          py: "52px",
          borderRadius: "20px",
          background: "linear-gradient(100deg, #5B4BC4 0%, #4B6FD0 45%, #29B4E5 100%)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", lg: "19px" },
            color: "#ffffff",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Остались вопросы? Спросите нас в соцсетях!
        </Typography>

        <Stack direction="row" sx={{ gap: "12px" }}>
          <IconButton sx={iconStyle}>
            <WhatsApp sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Telegram sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton sx={iconStyle}>
            <Chat sx={{ fontSize: "18px" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
import { Box, Stack, Typography, Button } from "@mui/material";

export default function PageBanner({ data }) {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "30px" }}>
      <Stack
        sx={{
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1280px",
          minHeight: { xs: "220px", lg: "260px" },
          mx: "auto",
          px: { xs: "28px", lg: "60px" },
          py: { xs: "36px", lg: "44px" },
          borderRadius: "24px",
          background: "linear-gradient(100deg, #5B4BC4 0%, #4B6FD0 45%, #29B4E5 100%)",
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "#D6DAF2" }}>{data.crumb}</Typography>

        <Typography
          sx={{
            mt: "16px",
            fontSize: { xs: "22px", lg: "28px" },
            color: "#ffffff",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          {data.title}
        </Typography>

        <Typography sx={{ mt: "12px", fontSize: "13px", color: "#D6DAF2" }}>{data.text}</Typography>

        <Button
          sx={{
            mt: "26px",
            px: "28px",
            py: "12px",
            borderRadius: "30px",
            backgroundColor: "#00C875",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#00B368" },
          }}
        >
          {data.btnText}
        </Button>
      </Stack>
    </Box>
  );
}
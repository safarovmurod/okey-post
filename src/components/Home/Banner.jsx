import { Box, Stack, Typography, Button } from "@mui/material";

export default function Banner({ data }) {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "40px" }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          alignItems: "center",
          gap: { xs: "30px", lg: "50px" },
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: "28px", lg: "60px" },
          py: { xs: "40px", lg: "50px" },
          borderRadius: "24px",
          background: "linear-gradient(100deg, #5B4BC4 0%, #4B6FD0 45%, #29B4E5 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", lg: "300px" },
            height: { xs: "220px", lg: "260px" },
          }}
        >
          {data.img && (
            <Box
              component="img"
              src={data.img}
              alt="banner"
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          )}
        </Box>

        <Stack sx={{ flex: 1, width: "100%" }}>
          <Typography
            sx={{
              width: "100%",
              fontSize: { xs: "20px", lg: "24px" },
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            {data.title}
          </Typography>

          <Typography sx={{ mt: "16px", fontSize: "13px", color: "#D6DAF2", lineHeight: 1.6 }}>
            {data.text}
          </Typography>

          <Button
            sx={{
              width: "170px",
              mt: "26px",
              px: "24px",
              py: "12px",
              borderRadius: "30px",
              backgroundColor: "#00C875",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "#00B368" },
            }}
          >
            {data.btnText}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
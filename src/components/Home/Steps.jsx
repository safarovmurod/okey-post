import { Box, Stack, Typography, Button } from "@mui/material";
import { stepList } from "../../data/api";

export default function Steps() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "60px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            width: { xs: "100%", lg: "420px" },
            fontSize: { xs: "24px", lg: "30px" },
            color: "#16233F",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          4 простых шага для ваших покупок в Великобритании
        </Typography>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{ gap: { xs: "40px", lg: "30px" }, width: "100%", mt: "40px" }}
        >
          {stepList.map((step) => (
            <Stack key={step.id} sx={{ flex: 1, width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "180px",
                }}
              >
                {step.img && (
                  <Box
                    component="img"
                    src={step.img}
                    alt={step.title}
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                )}
              </Box>

              <Typography
                sx={{ mt: "24px", fontSize: "13px", color: "#16233F", fontWeight: 700, lineHeight: 1.5 }}
              >
                {step.title}
              </Typography>

              <Typography sx={{ mt: "12px", fontSize: "13px", color: "#8087A6", lineHeight: 1.8 }}>
                {step.text}{" "}
                {step.link && (
                  <Box component="span" sx={{ color: "#00C875", cursor: "pointer" }}>
                    {step.link}
                  </Box>
                )}{" "}
                {step.textEnd}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Typography
          sx={{
            width: { xs: "100%", lg: "460px" },
            mt: "50px",
            fontSize: "14px",
            color: "#8087A6",
            lineHeight: "30px",
          }}
        >
          Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за
          вас.
        </Typography>

        <Button
          sx={{
            width: { xs: "100%", lg: "200px" },
            mt: "24px",
            px: "24px",
            py: "14px",
            borderRadius: "30px",
            backgroundColor: "#00C875",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#00B368" },
          }}
        >
          Быстрая покупка
        </Button>
      </Box>
    </Box>
  );
}
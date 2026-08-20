import { Box, Stack, Typography, Button } from "@mui/material";
import { howToBuyList } from "../../data/api";

export default function Steps() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "50px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "22px", lg: "26px" }, color: "#16233F", fontWeight: 700 }}
        >
          Покупать в Великобритании очень просто
        </Typography>

        <Typography
          sx={{
            width: { xs: "100%", lg: "520px" },
            mt: "16px",
            fontSize: "13px",
            color: "#8087A6",
            lineHeight: 1.9,
          }}
        >
          Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать
          по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надёжно упакуем и
          отправим их к вам домой.
        </Typography>

        <Stack sx={{ gap: "50px", width: "100%", mt: "50px" }}>
          {howToBuyList.map((step) => (
            <Stack
              key={step.id}
              direction={{ xs: "column", lg: "row" }}
              sx={{ alignItems: "flex-start", gap: { xs: "20px", lg: "40px" }, width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "100%", lg: "200px" },
                  height: "170px",
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
                sx={{ width: "70px", fontSize: "30px", color: "#00C875", fontWeight: 700 }}
              >
                {step.num}
              </Typography>

              <Stack sx={{ flex: 1, width: "100%" }}>
                <Typography
                  sx={{ fontSize: "15px", color: "#16233F", fontWeight: 700, lineHeight: 1.5 }}
                >
                  {step.title}
                </Typography>

                <Typography sx={{ mt: "16px", fontSize: "13px", color: "#8087A6", lineHeight: 1.9 }}>
                  {step.text}{" "}
                  {step.link && (
                    <Box component="span" sx={{ color: "#FF8A3D", cursor: "pointer" }}>
                      {step.link}
                    </Box>
                  )}
                </Typography>

                {step.text2 && (
                  <Typography
                    sx={{ mt: "14px", fontSize: "13px", color: "#8087A6", lineHeight: 1.9 }}
                  >
                    {step.text2}
                  </Typography>
                )}
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Button
          sx={{
            mt: "50px",
            px: "28px",
            py: "13px",
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
          Получить адрес в UK
        </Button>
      </Box>
    </Box>
  );
}
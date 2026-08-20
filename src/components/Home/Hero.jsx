import { Box, Stack, Typography, Button } from "@mui/material";
import img from "../../assets/hero.png"

export default function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "40px", lg: "40px" },
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: "32px", lg: "70px" },
          py: { xs: "48px", lg: "60px" },
          borderRadius: "40px",
          background:
            "linear-gradient(100deg, #5B4BC4 0%, #4B6FD0 45%, #29B4E5 100%)",
        }}
      >
        <Stack sx={{ width: { xs: "100%", lg: "480px" } }}>
          <Typography
            component="h1"
            sx={{
              width: "100%",
              fontSize: { xs: "30px", lg: "46px" },
              color: "#ffffff",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Доставка товаров <br />
            из Великобритании <br />в Россию
          </Typography>

          <Typography
            sx={{
              width: { xs: "100%", lg: "420px" },
              mt: "24px",
              fontSize: "14px",
              color: "#D6DAF2",
              lineHeight: "26px",
            }}
          >
            Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со
            скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в
            Россию.
          </Typography>

          <Button
            sx={{
              width: "200px",
              mt: "32px",
              px: "24px",
              py: "12px",
              borderRadius: "30px",
              backgroundColor: "#20C25C",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "#1BAE52" },
            }}
          >
            Получить адрес в UK
          </Button>
        </Stack>

        <Box
          component="img"
          src={img}
          alt="hero"
          sx={{ width: { xs: "100%", lg: "480px" }, height: "auto" }}
        />
      </Stack>
    </Box>
  );
}
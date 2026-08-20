import { Box, Stack, Typography, IconButton } from "@mui/material";
import { Telegram, Instagram, Facebook } from "@mui/icons-material";
import logo from "../assets/_2243895274448.png";

const aboutList = [
  "О нас",
  "Блог",
  "Цены",
  "Отзывы",
  "Контакты",
  "Обращение с персональными данными",
  "Пользовательское соглашение",
];

const helpList = [
  "Как работает наш сервис",
  "Как получить и оплатить заказ",
  "Ответы на частые вопросы",
  "Что делать при задержке",
  "Через сколько приходит посылка",
  "Страхование и возврат",
];

const specialList = [
  "Обновлённая доставка",
  "Скидки для постоянных клиентов",
  "Реферальная программа",
  "Выкупаем товары с Amazon",
  "Бонусы",
];

export default function Footer() {
  const linkStyle = {
    fontSize: "13px",
    color: "#8087A6",
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": { color: "#00C875" },
  };

  const titleStyle = { fontSize: "14px", color: "#16233F", fontWeight: 700 };

  return (
    <Box component="footer" sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, pt: "20px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{ justifyContent: "space-between", gap: "40px", width: "100%", mt: "30px" }}
        >
          <Stack sx={{ width: { xs: "100%", lg: "220px" } }}>
            <Stack direction="row" sx={{ alignItems: "center", gap: "10px" }}>
              <Box component="img" src={logo} alt="logo" />

            </Stack>

            <Stack direction="row" sx={{ gap: "10px", mt: "20px" }}>
              <IconButton sx={{ border: "1px solid #E8EBF2", color: "#00C875" }}>
                <Telegram sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton sx={{ border: "1px solid #E8EBF2", color: "#00C875" }}>
                <Instagram sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton sx={{ border: "1px solid #E8EBF2", color: "#00C875" }}>
                <Facebook sx={{ fontSize: "18px" }} />
              </IconButton>
            </Stack>
          </Stack>

          <Stack sx={{ gap: "14px", width: { xs: "100%", lg: "260px" } }}>
            <Typography sx={titleStyle}>О компании</Typography>
            {aboutList.map((item) => (
              <Typography key={item} sx={linkStyle}>
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack sx={{ gap: "14px", width: { xs: "100%", lg: "260px" } }}>
            <Typography sx={titleStyle}>Помощь</Typography>
            {helpList.map((item) => (
              <Typography key={item} sx={linkStyle}>
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack sx={{ gap: "14px", width: { xs: "100%", lg: "240px" } }}>
            <Typography sx={titleStyle}>Спецпроекты</Typography>
            {specialList.map((item) => (
              <Typography key={item} sx={linkStyle}>
                {item}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Typography
          sx={{
            width: "100%",
            mt: "50px",
            pb: "30px",
            fontSize: "12px",
            color: "#8087A6",
            textAlign: "center",
          }}
        >
          © 2021 OkeyPost. Все права защищены
        </Typography>
      </Box>
    </Box>
  );
}
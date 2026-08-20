import { useState } from "react";
import { Box, Stack, Typography, Button, TextField, MenuItem, InputAdornment } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import ScaleIcon from "@mui/icons-material/Scale";
import DescriptionIcon from "@mui/icons-material/Description";
import { countryList, serviceList } from "../../data/api";

export default function Calculator() {
  const [form, setForm] = useState({
    country: "Россия",
    city: "",
    index: "",
    weight: "",
    service: "",
  });

  // як handler барои ҳама майдон — аз рӯи name мефаҳмад, кадомашро иваз кунад
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  const fieldStyle = {
    flex: 1,
    minWidth: { xs: "100%", lg: "170px" },
    "& .MuiInput-underline:before": { borderBottomColor: "#DDE2EC" },
    "& .MuiInput-underline:after": { borderBottomColor: "#00C875" },
    "& .MuiInputBase-input": { fontSize: "14px", color: "#16233F" },
  };

  const labelStyle = { mb: "6px", fontSize: "12px", color: "#8087A6" };

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "60px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            width: { xs: "100%", lg: "520px" },
            fontSize: { xs: "24px", lg: "30px" },
            color: "#16233F",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          OkeyPost удобная и быстрая доставка посылок из Великобритании
        </Typography>

        <Typography
          sx={{
            width: { xs: "100%", lg: "540px" },
            mt: "20px",
            fontSize: "14px",
            color: "#8087A6",
            lineHeight: "28px",
          }}
        >
          Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе,
          при необходимости объединим несколько доставок в одну и отправим их к вам надежно
          упакованными.
        </Typography>

        <Box
          sx={{
            width: "100%",
            mt: "36px",
            px: { xs: "24px", lg: "40px" },
            py: { xs: "30px", lg: "40px" },
            borderRadius: "16px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 8px 30px rgba(22,35,63,0.06)",
          }}
        >
          <Stack direction={{ xs: "column", lg: "row" }} sx={{ gap: "30px", width: "100%" }}>
            <Stack sx={{ flex: 1 }}>
              <Typography sx={labelStyle}>Страна:</Typography>
              <TextField
                select
                name="country"
                value={form.country}
                onChange={handleChange}
                variant="standard"
                sx={fieldStyle}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PublicIcon sx={{ fontSize: "20px", color: "#8087A6" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              >
                {countryList.map((country) => (
                  <MenuItem key={country} value={country} sx={{ fontSize: "14px" }}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <Stack sx={{ flex: 1 }}>
              <Typography sx={labelStyle}>Город:</Typography>
              <TextField
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Москва"
                variant="standard"
                sx={fieldStyle}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon sx={{ fontSize: "20px", color: "#8087A6" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>

            <Stack sx={{ flex: 1 }}>
              <Typography sx={labelStyle}>Индекс:</Typography>
              <TextField
                name="index"
                value={form.index}
                onChange={handleChange}
                placeholder="Введите индекс"
                variant="standard"
                sx={fieldStyle}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MarkunreadMailboxIcon sx={{ fontSize: "20px", color: "#8087A6" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>

            <Stack sx={{ flex: 1 }}>
              <Typography sx={labelStyle}>Вес посылки:</Typography>
              <TextField
                name="weight"
                value={form.weight}
                onChange={handleChange}
                placeholder="0.5"
                variant="standard"
                sx={fieldStyle}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <ScaleIcon sx={{ fontSize: "20px", color: "#8087A6" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>

            <Stack sx={{ flex: 1 }}>
              <Typography sx={labelStyle}>Дополнительные услуги:</Typography>
              <TextField
                select
                name="service"
                value={form.service}
                onChange={handleChange}
                variant="standard"
                sx={fieldStyle}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon sx={{ fontSize: "20px", color: "#8087A6" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              >
                {serviceList.map((service) => (
                  <MenuItem key={service} value={service} sx={{ fontSize: "14px" }}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Stack>

          <Button
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", lg: "200px" },
              mt: "36px",
              px: "24px",
              py: "14px",
              borderRadius: "30px",
              backgroundColor: "#00C875",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "#00B368" },
            }}
          >
            Рассчитать
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
import { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { Email } from "@mui/icons-material";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => setEmail(event.target.value);

  const handleSubmit = () => {
    console.log(email);
    setEmail("");
  };

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "30px" }}>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "24px", lg: "40px" },
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: "28px", lg: "50px" },
          py: { xs: "44px", lg: "60px" },
          borderRadius: "20px",
          background: "linear-gradient(100deg, #5B4BC4 0%, #4B6FD0 45%, #29B4E5 100%)",
        }}
      >
        <Typography
          sx={{
            width: { xs: "100%", lg: "330px" },
            fontSize: { xs: "17px", lg: "19px" },
            color: "#ffffff",
            fontWeight: 700,
            lineHeight: 1.5,
          }}
        >
          Подпишитесь и будьте в курсе всех скидок и акций магазинов Великобритании!
        </Typography>

        <TextField
          value={email}
          onChange={handleChange}
          placeholder="Введите e-mail"
          variant="standard"
          sx={{
            flex: 1,
            width: "100%",
            "& .MuiInput-underline:before": { borderBottomColor: "#ffffff60" },
            "& .MuiInput-underline:after": { borderBottomColor: "#ffffff" },
            "& .MuiInputBase-input": { fontSize: "14px", color: "#ffffff", py: "10px" },
            "& .MuiInputBase-input::placeholder": { color: "#D6DAF2", opacity: 1 },
          }}
          slotProps={{
            input: {
              startAdornment: <Email sx={{ mr: "12px", fontSize: "20px", color: "#D6DAF2" }} />,
            },
          }}
        />

        <Button
          onClick={handleSubmit}
          sx={{
            width: { xs: "100%", lg: "170px" },
            px: "24px",
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
          Подписаться
        </Button>
      </Stack>
    </Box>
  );
}
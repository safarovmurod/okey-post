import { Box, Stack, Typography } from "@mui/material";
import { clientList } from "../../data/api";

export default function Clients() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "60px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            width: { xs: "100%", lg: "460px" },
            fontSize: { xs: "24px", lg: "30px" },
            color: "#16233F",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          120 000 довольных клиентов в России уже сделали свой выбор
        </Typography>

        <Typography
          sx={{
            width: { xs: "100%", lg: "480px" },
            mt: "20px",
            fontSize: "14px",
            color: "#8087A6",
            lineHeight: "28px",
          }}
        >
          За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633
          отзыва
        </Typography>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{ gap: "24px", width: "100%", mt: "36px" }}
        >
          {clientList.map((client) => {
            const ClientIcon = client.icon;

            return (
              <Stack
                key={client.id}
                sx={{
                  flex: 1,
                  width: "100%",
                  px: "28px",
                  py: "28px",
                  borderRadius: "14px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 6px 24px rgba(22,35,63,0.06)",
                }}
              >
                <ClientIcon sx={{ fontSize: "34px", color: "#29B4E5" }} />

                <Typography
                  sx={{ mt: "24px", fontSize: "14px", color: "#16233F", fontWeight: 700 }}
                >
                  {client.title}
                </Typography>

                <Typography sx={{ mt: "12px", fontSize: "13px", color: "#8087A6", lineHeight: 1.7 }}>
                  {client.text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
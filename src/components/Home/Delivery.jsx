import { useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { deliveryList } from "../../data/api";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Delivery() {
  const [openId, setOpenId] = useState(0);

  // ба ҳамонаш дубора пахш кардӣ — пӯшида мешавад
  const handleOpen = (id) => setOpenId(openId === id ? 0 : id);

  const cellStyle = {
    justifyContent: "center",
    px: "24px",
    py: "18px",
    borderLeft: { xs: "none", lg: "1px solid #E8EBF2" },
  };

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "40px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "20px", lg: "24px" }, color: "#16233F", fontWeight: 700 }}
        >
          Варианты доставки:
        </Typography>

        <Stack sx={{ gap: "16px", width: "100%", mt: "24px" }}>
          {deliveryList.map((delivery) => {
            const DeliveryIcon = delivery.icon;
            const isOpen = delivery.id === openId;

            return (
              <Box
                key={delivery.id}
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 6px 20px rgba(22,35,63,0.05)",
                  overflow: "hidden",
                }}
              >
                <Stack
                  direction={{ xs: "column", lg: "row" }}
                  onClick={() => handleOpen(delivery.id)}
                  sx={{ alignItems: { xs: "flex-start", lg: "stretch" }, width: "100%", cursor: "pointer" }}
                >
                  <Stack direction="row" sx={{ alignItems: "center", gap: "20px", flex: 1, px: "26px", py: "20px" }}>
                    <DeliveryIcon sx={{ fontSize: "34px", color: "#16233F" }} />
                    <Typography sx={{ fontSize: "13px", color: "#16233F", fontWeight: 700 }}>
                      {delivery.name}
                    </Typography>
                  </Stack>

                  <Stack sx={{ ...cellStyle, width: { xs: "100%", lg: "170px" } }}>
                    <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>Сроки:</Typography>
                    <Typography sx={{ mt: "4px", fontSize: "15px", color: "#16233F", fontWeight: 700 }}>
                      {delivery.days}
                    </Typography>
                  </Stack>

                  <Stack sx={{ ...cellStyle, width: { xs: "100%", lg: "190px" } }}>
                    <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>Стоимость доставки:</Typography>
                    <Typography sx={{ mt: "4px", fontSize: "15px", color: "#16233F", fontWeight: 700 }}>
                      {delivery.price}
                    </Typography>
                  </Stack>

                  <Stack sx={{ ...cellStyle, width: { xs: "100%", lg: "150px" } }}>
                    <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>Итого:</Typography>
                    <Typography sx={{ mt: "4px", fontSize: "15px", color: "#16233F", fontWeight: 700 }}>
                      {delivery.total}
                    </Typography>
                  </Stack>

                  <Stack sx={{ ...cellStyle, alignItems: "center", width: { xs: "100%", lg: "80px" } }}>
                    <IconButton sx={{ color: "#00C875" }}>
                      <KeyboardArrowDown
                        sx={{ transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>

                {isOpen && (
                  <Box
                    sx={{
                      px: "26px",
                      py: "20px",
                      borderTop: "1px solid #E8EBF2",
                      animation: "openDown 0.3s ease",
                      "@keyframes openDown": {
                        from: { opacity: 0, transform: "translateY(-8px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "13px", color: "#8087A6", lineHeight: 1.7 }}>
                      {delivery.text}
                    </Typography>
                  </Box>
                )}
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
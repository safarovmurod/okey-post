import { useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import { shopList } from "../../data/api";

const perPage = 6;

export default function Shops() {
  const [page, setPage] = useState(1);

  const handlePage = (event, value) => setPage(value);

  // аз массиви умумӣ фақат порчаи саҳифаи ҷорӣ
  const start = (page - 1) * perPage;
  const pageList = shopList.slice(start, start + perPage);
  const pageCount = Math.ceil(shopList.length / perPage);

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "50px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            width: { xs: "100%", lg: "480px" },
            fontSize: { xs: "22px", lg: "28px" },
            color: "#16233F",
            fontWeight: 700,
            lineHeight: 1.35,
          }}
        >
          Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!
        </Typography>

        <Stack direction="row" sx={{ flexWrap: "wrap", gap: "24px", width: "100%", mt: "36px" }}>
          {pageList.map((shop) => (
            <Stack
              key={shop.id}
              direction="row"
              sx={{
                gap: "20px",
                width: { xs: "100%", lg: "calc(50% - 12px)" },
                px: "20px",
                py: "20px",
                borderRadius: "14px",
                backgroundColor: "#ffffff",
                boxShadow: "0px 6px 24px rgba(22,35,63,0.06)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "110px", lg: "150px" },
                  height: { xs: "110px", lg: "150px" },
                  borderRadius: "10px",
                  backgroundColor: "#EEF2FB",
                  overflow: "hidden",
                }}
              >
                {shop.img && (
                  <Box
                    component="img"
                    src={shop.img}
                    alt={shop.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </Box>

              <Stack sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "14px", color: "#16233F", fontWeight: 700 }}>
                  {shop.name}
                </Typography>

                <Stack sx={{ gap: "8px", mt: "14px" }}>
                  {shop.textList.map((text) => (
                    <Typography key={text} sx={{ fontSize: "12px", color: "#8087A6" }}>
                      {text}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  sx={{
                    mt: "16px",
                    fontSize: "12px",
                    color: "#00C875",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {shop.link}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Stack sx={{ alignItems: "center", width: "100%", mt: "40px" }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePage}
            sx={{
              "& .MuiPaginationItem-root": { color: "#8087A6" },
              "& .Mui-selected": { backgroundColor: "#00C875 !important", color: "#ffffff" },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}
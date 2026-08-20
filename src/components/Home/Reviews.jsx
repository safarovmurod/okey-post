import { Box, Stack, Typography, Button, Rating } from "@mui/material";
import { reviewList } from "../../data/api";

export default function Reviews() {
  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "60px" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "22px", lg: "26px" }, color: "#16233F", fontWeight: 700 }}
        >
          Отзывы и цитаты блогеров:
        </Typography>

        <Stack
          direction="row"
          sx={{ flexWrap: "wrap", gap: "24px", width: "100%", mt: "28px" }}
        >
          {reviewList.map((review) => (
            <Stack
              key={review.id}
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
                  width: { xs: "100px", lg: "120px" },
                  height: { xs: "100px", lg: "120px" },
                  borderRadius: "10px",
                  backgroundColor: "#EEF2FB",
                  overflow: "hidden",
                }}
              >
                {review.img && (
                  <Box
                    component="img"
                    src={review.img}
                    alt={review.name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </Box>

              <Stack sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "13px", color: "#16233F", fontWeight: 700 }}>
                  {review.name}
                </Typography>

                <Rating
                  value={review.rating}
                  readOnly
                  sx={{ mt: "6px", fontSize: "16px", color: "#FFB800" }}
                />

                <Typography sx={{ mt: "10px", fontSize: "13px", color: "#8087A6", lineHeight: 1.6 }}>
                  {review.text}
                </Typography>

                <Stack direction="row" sx={{ gap: "10px", mt: "14px" }}>
                  <Typography sx={{ fontSize: "12px", color: "#16233F", fontWeight: 700 }}>
                    Дата:
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>{review.date}</Typography>
                </Stack>

                <Stack direction="row" sx={{ gap: "10px", mt: "4px" }}>
                  <Typography sx={{ fontSize: "12px", color: "#16233F", fontWeight: 700 }}>
                    Город:
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>{review.city}</Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>

        <Button
          sx={{
            width: { xs: "100%", lg: "180px" },
            mt: "30px",
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
          Все отзывы
        </Button>
      </Box>
    </Box>
  );
}
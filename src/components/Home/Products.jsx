import { useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { categoryList, afzalList } from "../../data/api";
import flagRu from "../../assets/flag-ru.png";
import flagUk from "../../assets/flag-uk.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Products() {
  const [catId, setCatId] = useState(categoryList[0].id);
  const [itemId, setItemId] = useState(categoryList[0].items[0].id);

  const activeCategory = categoryList.find((category) => category.id === catId);
  const itemList = activeCategory.items;
  const activeItem = itemList.find((item) => item.id === itemId);

  const place = itemList.findIndex((item) => item.id === itemId);
  const prevItem = place === 0 ? itemList[itemList.length - 1] : itemList[place - 1];
  const nextItem = place === itemList.length - 1 ? itemList[0] : itemList[place + 1];

  const catPlace = categoryList.findIndex((category) => category.id === catId);
  const prevCategory = catPlace === 0 ? categoryList[categoryList.length - 1] : categoryList[catPlace - 1];
  const nextCategory = catPlace === categoryList.length - 1 ? categoryList[0] : categoryList[catPlace + 1];

  const handleCategory = (category) => {
    setCatId(category.id);
    setItemId(category.items[0].id);
  };

  const handlePrev = () => setItemId(prevItem.id);
  const handleNext = () => setItemId(nextItem.id);

  const fadeStyle = {
    animation: "fadeIn 0.5s ease",
    "@keyframes fadeIn": {
      from: { opacity: 0, transform: "translateY(14px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  };

  // 3D: сурат аз паҳлу гардида ва наздик шуда меояд
  const slideStyle = {
    animation: "slide3d 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
    "@keyframes slide3d": {
      from: { opacity: 0, transform: "perspective(1000px) rotateY(-25deg) translateX(60px) scale(0.85)" },
      to: { opacity: 1, transform: "perspective(1000px) rotateY(0deg) translateX(0) scale(1)" },
    },
  };

  const priceBoxStyle = {
    alignItems: "center",
    gap: "14px",
    mt: "20px",
    px: "18px",
    py: "16px",
    borderRadius: "14px",
    backgroundColor: "#EEF2FB",
  };

  return (
    <Box sx={{ width: "100%", px: { xs: "16px", lg: "0px" }, py: "60px", backgroundColor: "#F7F8FA" }}>
      <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            width: { xs: "100%", lg: "380px" },
            fontSize: { xs: "24px", lg: "30px" },
            color: "#16233F",
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Насколько выгодно покупать?
        </Typography>

        {/* категорияҳо */}
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            gap: "4px",
            width: "100%",
            mt: "30px",
            px: "12px",
            py: "10px",
            borderRadius: "14px",
            backgroundColor: "#ffffff",
            overflowX: "auto",
          }}
        >
          <IconButton onClick={() => handleCategory(prevCategory)} sx={{ color: "#00C875" }}>
            <ArrowBack sx={{ fontSize: "20px" }} />
          </IconButton>

          {categoryList.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = category.id === catId;

            return (
              <Stack
                key={category.id}
                direction="row"
                onClick={() => handleCategory(category)}
                sx={{
                  alignItems: "center",
                  gap: "10px",
                  px: "18px",
                  py: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.25s",
                  backgroundColor: isActive ? "#EDF2FC" : "transparent",
                  "&:hover": { backgroundColor: isActive ? "#EDF2FC" : "#F5F7FA" },
                }}
              >
                <CategoryIcon sx={{ fontSize: "26px", color: isActive ? "#00C875" : "#8087A6" }} />
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: isActive ? "#16233F" : "#4A5170",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {category.name}
                </Typography>
              </Stack>
            );
          })}

          <IconButton onClick={() => handleCategory(nextCategory)} sx={{ color: "#00C875" }}>
            <ArrowForward sx={{ fontSize: "20px" }} />
          </IconButton>
        </Stack>

        {/* маҳсулоти фаъол */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{ alignItems: "center", justifyContent: "space-between", gap: "30px", width: "100%", mt: "50px" }}
        >
          <Stack key={activeItem.id} sx={{ ...fadeStyle, width: { xs: "100%", lg: "290px" } }}>
            <Typography sx={{ fontSize: "17px", color: "#16233F", fontWeight: 700, lineHeight: 1.4 }}>
              {activeItem.name}
            </Typography>
            <Typography sx={{ mt: "8px", fontSize: "13px", color: "#8087A6", lineHeight: 1.5 }}>
              {activeItem.text}
            </Typography>

            <Stack direction="row" sx={priceBoxStyle}>
              <Box
                component="img"
                src={flagRu}
                alt="ru"
                sx={{ width: "40px", height: "auto", borderRadius: "4px" }}
              />
              <Stack>
                <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>Цена в России</Typography>
                <Typography sx={{ fontSize: "17px", color: "#16233F", fontWeight: 700 }}>
                  {activeItem.priceRu}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Box
            key={activeItem.img}
            component="img"
            src={activeItem.img}
            alt={activeItem.name}
            sx={{
              ...slideStyle,
              width: { xs: "260px", lg: "320px" },
              height: { xs: "260px", lg: "320px" },
              objectFit: "contain",
              transition: "transform 0.35s",
              "&:hover": { transform: "perspective(1000px) rotateY(-8deg) scale(1.06)" },
            }}
          />

          <Stack key={activeItem.id + 1} sx={{ ...fadeStyle, width: { xs: "100%", lg: "290px" } }}>
            <Typography sx={{ fontSize: "17px", color: "#16233F", fontWeight: 700, lineHeight: 1.4 }}>
              Доставка {activeCategory.nameOf} из Великобритании{" "}
              <Box component="span" sx={{ color: "#00C875" }}>
                {activeItem.delivery}
              </Box>
            </Typography>

            <Stack direction="row" sx={priceBoxStyle}>
              <Box
                component="img"
                src={flagUk}
                alt="uk"
                sx={{ width: "40px", height: "auto", borderRadius: "4px" }}
              />
              <Stack>
                <Typography sx={{ fontSize: "12px", color: "#8087A6" }}>Цена в UK</Typography>
                <Typography sx={{ fontSize: "17px", color: "#00C875", fontWeight: 700 }}>
                  {activeItem.priceUk}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* стрелкаҳо */}
        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", width: "100%", mt: "40px" }}>
          <Stack direction="row" sx={{ alignItems: "center", gap: "14px" }}>
            <Box
              component="img"
              src={prevItem.img}
              alt="prev"
              onClick={handlePrev}
              sx={{
                display: { xs: "none", lg: "block" },
                width: "80px",
                height: "80px",
                objectFit: "contain",
                opacity: 0.5,
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { opacity: 1, transform: "scale(1.12)" },
              }}
            />
            <IconButton onClick={handlePrev} sx={{ color: "#00C875" }}>
              <ArrowBack />
            </IconButton>
          </Stack>

          <Stack key={activeItem.id} sx={{ ...fadeStyle, alignItems: "center" }}>
            <Typography sx={{ fontSize: "13px", color: "#8087A6" }}>
              Срок доставки примерно {activeItem.days}
            </Typography>
            <Typography sx={{ mt: "6px", fontSize: "17px", color: "#16233F", fontWeight: 700 }}>
              Вы экономите до{" "}
              <Box component="span" sx={{ color: "#00C875" }}>
                {activeItem.save}
              </Box>
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ alignItems: "center", gap: "14px" }}>
            <IconButton onClick={handleNext} sx={{ color: "#00C875" }}>
              <ArrowForward />
            </IconButton>
            <Box
              component="img"
              src={nextItem.img}
              alt="next"
              onClick={handleNext}
              sx={{
                display: { xs: "none", lg: "block" },
                width: "80px",
                height: "80px",
                objectFit: "contain",
                opacity: 0.5,
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { opacity: 1, transform: "scale(1.12)" },
              }}
            />
          </Stack>
        </Stack>

        {/* блоки поёнӣ */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{ width: "100%", mt: "60px", borderRadius: "16px", backgroundColor: "#ffffff", overflow: "hidden" }}
        >
          {afzalList.map((afzal) => {
            const AfzalIcon = afzal.icon;
            const isLast = afzal.id === afzalList.length;

            return (
              <Stack
                key={afzal.id}
                direction="row"
                sx={{
                  alignItems: "center",
                  gap: "16px",
                  flex: 1,
                  px: "26px",
                  py: "26px",
                  borderRight: { xs: "none", lg: isLast ? "none" : "1px solid #E8EBF2" },
                  borderBottom: { xs: isLast ? "none" : "1px solid #E8EBF2", lg: "none" },
                }}
              >
                <AfzalIcon sx={{ fontSize: "32px", color: "#00C875" }} />
                <Typography sx={{ fontSize: "14px", color: "#16233F", fontWeight: 600, lineHeight: 1.4 }}>
                  {afzal.title} <br /> {afzal.text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
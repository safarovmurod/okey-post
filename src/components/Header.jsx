import { useState } from "react";
import { NavLink } from "react-router";
import { Box, Stack, Typography, Button, IconButton, Drawer } from "@mui/material";
import icon from "../assets/_2243895274448.png";
import iconUser from "../assets/User.png";
import { Close, Menu } from "@mui/icons-material";

const menuList = [
  { name: "Как покупать", path: "/how-to-buy" },
  { name: "Распродажи", path: "/sales" },
  { name: "Цены", path: "/prices" },
  { name: "Помощь", path: "/help" },
  { name: "Бонусы", path: "/bonus" },
  { name: "Блог", path: "/blog" },
  { name: "Магазины", path: "/shops" },
];

const linkStyle = {
  position: "relative",
  fontSize: "14px",
  color: "#3D4166",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s",
  "&:hover": { color: "#1B1F3B" },
  "&.active": { color: "#00C853", fontWeight: 600 },
  "&.active::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-6px",
    width: "100%",
    height: "2px",
    borderRadius: "2px",
    backgroundColor: "#00C853",
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff" }}>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: "16px", lg: "0px" },
          py: "20px",
        }}
      >
        <Stack
          component={NavLink}
          to="/"
          direction="row"
          sx={{ alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <Box component="img" src={icon} alt="logo" />
        </Stack>

        <Stack
          direction="row"
          sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: "28px" }}
        >
          {menuList.map((item) => (
            <Typography key={item.name} component={NavLink} to={item.path} end sx={linkStyle}>
              {item.name}
            </Typography>
          ))}
        </Stack>

        <Stack
          direction="row"
          sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: "20px" }}
        >
          <Stack direction="row" sx={{ alignItems: "center", gap: "8px", cursor: "pointer" }}>
            <Box component="img" src={iconUser} alt="user" sx={{ width: "18px", height: "auto" }} />
            <Typography sx={{ fontSize: "14px", color: "#1B1F3B" }}>Вход</Typography>
          </Stack>

          <Button
            sx={{
              px: "24px",
              py: "12px",
              borderRadius: "30px",
              backgroundColor: "#00C853",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "none",
              whiteSpace: "nowrap",
              "&:hover": { backgroundColor: "#00B44A" },
            }}
          >
            Связаться с нами
          </Button>
        </Stack>

        <IconButton
          onClick={handleClick}
          sx={{ display: { xs: "flex", lg: "none" }, color: "#1B1F3B" }}
        >
          <Menu />
        </IconButton>
      </Stack>

      {/* меню аз тарафи рост, фони торик худаш меояд */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleClick}
        slotProps={{
          paper: { sx: { width: "280px", px: "24px", py: "24px" } },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={handleClick} sx={{ color: "#1B1F3B" }}>
            <Close />
          </IconButton>
        </Stack>

        <Stack sx={{ gap: "22px", mt: "20px" }}>
          {menuList.map((item) => (
            <Typography
              key={item.name}
              component={NavLink}
              to={item.path}
              end
              onClick={handleClick}
              sx={{ ...linkStyle, fontSize: "15px" }}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>

        <Stack
          direction="row"
          sx={{ alignItems: "center", gap: "8px", mt: "30px", cursor: "pointer" }}
        >
          <Box component="img" src={iconUser} alt="user" sx={{ width: "18px", height: "auto" }} />
          <Typography sx={{ fontSize: "15px", color: "#1B1F3B" }}>Вход</Typography>
        </Stack>

        <Button
          sx={{
            width: "100%",
            mt: "20px",
            py: "12px",
            borderRadius: "30px",
            backgroundColor: "#00C853",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "#00B44A" },
          }}
        >
          Связаться с нами
        </Button>
      </Drawer>
    </Box>
  );
}

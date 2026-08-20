import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundColor: "#191A23",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          backgroundColor: "#B9FF66",
          opacity: 0.18,
          filter: "blur(160px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "760px",
          animation: "floatUp 4s ease-in-out infinite",
          "@keyframes floatUp": {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-14px)" },
            "100%": { transform: "translateY(0px)" },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "120px", sm: "200px", md: "260px" },
            lineHeight: 1,
            fontWeight: 700,
            fontFamily: "Space Grotesk, sans-serif",
            color: "#B9FF66",
            letterSpacing: "-8px",
            textShadow: "0px 0px 60px #b9ff6640",
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            marginTop: "8px",
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: 600,
            fontFamily: "Space Grotesk, sans-serif",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          sx={{
            marginTop: "20px",
            maxWidth: "520px",
            fontSize: { xs: "15px", md: "18px" },
            lineHeight: "28px",
            fontFamily: "Space Grotesk, sans-serif",
            color: "#D6D6D6",
            textAlign: "center",
          }}
        >
          Саҳифае, ки ҷустуҷӯ карда истодаӣ, вуҷуд надорад ё кӯчонида шудааст.
          Ба саҳифаи асосӣ баргард.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <Button
            component={Link}
            to="/"
            sx={{
              padding: "16px 34px",
              borderRadius: "14px",
              backgroundColor: "#B9FF66",
              color: "#191A23",
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "Space Grotesk, sans-serif",
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#FFFFFF",
                transform: "translateY(-3px)",
              },
            }}
          >
            Ба саҳифаи асосӣ
          </Button>

          <Button
            onClick={handleBack}
            sx={{
              padding: "16px 34px",
              borderRadius: "14px",
              border: "1px solid #FFFFFF",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "Space Grotesk, sans-serif",
              textTransform: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                borderColor: "#B9FF66",
                color: "#B9FF66",
                transform: "translateY(-3px)",
              },
            }}
          >
            Қафо
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
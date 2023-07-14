import * as React from "react";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Main() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        className="
        px-2 outline-indigo-100 outline-1 outline"
      >
        <div className="">
          <Image
            className="p-3 relative max-w-2xl"
            src="/main.webp"
            alt=""
            width="1400"
            height="100"
          />
          <h1 className="absolute z-120 text-left p-2">
            Describe the value of booking an appointment
          </h1>
          <div></div>
        </div>
        <Box sx={{ bgcolor: "cyan", height: "100vh" }} 
        
        
        />
      </Container>
    </>
  );
}

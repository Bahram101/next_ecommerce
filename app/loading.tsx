import React from "react";
import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100vw',
      height:'100vh'
    }}>
      <Image src={loader} width={30} height={30} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;

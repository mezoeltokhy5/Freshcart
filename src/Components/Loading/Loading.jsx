import React, { useState } from "react";
import style from "./Loading.module.css";
import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
}

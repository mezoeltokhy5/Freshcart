import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import axios from "axios";
import RecentProducts from "../RecentProducts/RecentProducts";
import Loading from "../Loading/Loading";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [products, setProducts] = useState([]);
  // async function getRecentProducts() {
  //   try {
  //     let { data } = await axios.get(
  //       `https://ecommerce.routemisr.com/api/v1/products`
  //     );
  //     console.log(data.data);
  //     setProducts(data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   getRecentProducts();
  // }, []);
  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    retry: 3,
    retryDelay: 6000,
    // refetchInterval: 600,
    select: (data) => data?.data.data,
  });
  console.log(data);

  return (
    <>
      <MainSlider />
      <CategorySlider />
      {!isLoading ? (
        <div className="flex flex-wrap justify-center my-7">
          {data.map((product, index) => (
            <RecentProducts key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className=" h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}

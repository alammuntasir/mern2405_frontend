"use client";
import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import FeatureProduct from "@/components/home/FeatureProduct";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeatureProduct />
    </div>
  );
};

export default page;

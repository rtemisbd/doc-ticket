"use client";
import Container from "@/components/shared/Container";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Ranga } from "next/font/google";
import React from "react";

const BreadCombService = () => {
  return (
    <Container>
      <div className="  py-2 my-4 text-white">
        <Breadcrumbs className="text-black" color='primary'>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </Container>
  );
};

export default BreadCombService;



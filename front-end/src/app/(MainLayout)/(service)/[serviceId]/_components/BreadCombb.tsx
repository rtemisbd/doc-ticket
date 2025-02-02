"use client"


import Container from "@/components/shared/Container";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

const BreadCombb = () => {
  return (
    <div>
      <Container>
        <Breadcrumbs color={"primary"}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Service</BreadcrumbItem>
          <BreadcrumbItem>Details</BreadcrumbItem>
          <BreadcrumbItem>Dental</BreadcrumbItem>
 
        </Breadcrumbs>
      </Container>
    </div>
  );
};

export default BreadCombb;

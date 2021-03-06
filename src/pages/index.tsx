import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Heading } from "@chakra-ui/react";
import { MainEditor } from "../components/MainEditor";

const IndexPage = () => (
  <Layout title="Theme Builder">
    <MainEditor/>
  </Layout>
);

export default IndexPage;

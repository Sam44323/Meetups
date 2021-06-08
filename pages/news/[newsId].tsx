import React from "react";
import { useRouter } from "next/router";

const DetailsPage: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.newsId}</h1>
    </>
  );
};

export default DetailsPage;

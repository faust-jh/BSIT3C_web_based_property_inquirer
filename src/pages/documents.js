import React from "react";
import Admin from "../components/Admin";

export default function Documents() {
  return <div>Documents</div>;
}

Documents.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

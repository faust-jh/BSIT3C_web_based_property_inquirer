import React from "react";
import Admin from "../components/Admin";

export default function Properties() {
  return <div>Properties</div>;
}

Properties.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

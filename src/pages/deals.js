import React from "react";
import Admin from "../components/Admin";

export default function Deals() {
  return <div>Deals</div>;
}

Deals.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

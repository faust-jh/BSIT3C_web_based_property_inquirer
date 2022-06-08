import React from "react";
import Admin from "../components/Admin";

export default function Loans() {
  return <div>Loans</div>;
}

Loans.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

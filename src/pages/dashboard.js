import React from "react";
import Admin from "../components/Admin";

export default function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

import React from "react";
import Admin from "../components/Admin";

export default function Settings() {
  return <div>Settings</div>;
}

Settings.getLayout = function getLayout(page) {
  return <Admin>{page}</Admin>;
};

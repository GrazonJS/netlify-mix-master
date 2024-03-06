import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="page">Loading...</div> : <Outlet />}
      </section>
    </div>
  );
}

export default HomeLayout;

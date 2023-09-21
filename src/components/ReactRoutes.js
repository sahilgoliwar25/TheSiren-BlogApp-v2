import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

import Error from "./Error";

import ContextAPI from "./ContextAPI";
import "./GlobalNavComp.css";
import DynamicBlog from "./DynamicBlog/DynamicBlog";
import AboutUs from "./Other/AboutUs";
import ContactUs from "./Other/ContactUs";
import HelpCenter from "./Other/HelpCenter";
import Pages from "./Pages/Pages";

function ReactRoutes() {
  return (
    <div className="route-component">
      <ContextAPI>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Id" element={<DynamicBlog />} />

          <Route path="/hollywood" element={<Pages category={"Hollywood"} />} />
          <Route path="/hollywood/:Id" element={<DynamicBlog />} />
          <Route path="/food" element={<Pages category={"Food"} />} />
          <Route path="/food/:Id" element={<DynamicBlog />} />
          <Route path="/fitness" element={<Pages category={"Fitness"} />} />
          <Route path="/fitness/:Id" element={<DynamicBlog />} />
          <Route path="/bollywood" element={<Pages category={"Bollywood"} />} />
          <Route path="/bollywood/:Id" element={<DynamicBlog />} />
          <Route
            path="/technology"
            element={<Pages category={"Technology"} />}
          />
          <Route path="/technology/:Id" element={<DynamicBlog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextAPI>
    </div>
  );
}

export default ReactRoutes;

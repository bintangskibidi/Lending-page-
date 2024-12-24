// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { UpdateFollower } from "react-mouse-follower";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
    </main>
  );
};

export default App;
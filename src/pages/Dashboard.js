import React from "react";
import { CharacterCard } from "../components";
import AllCharactersList from "../components/AllCharactersList";
import Farming from "./Farming";
import PrimoSave from "./PrimoSave";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CharacterCard charaName="xiao" />
    </div>
  );
};

export default Dashboard;

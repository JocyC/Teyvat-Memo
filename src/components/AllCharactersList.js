import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import CharacterCard from "./CharacterCard";
import { useGetCharasQuery } from "../features/api/apiSlice";

const AllCharactersList = () => {
  const { data: charaNames, isLoading, isError, error } = useGetCharasQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error.toString()} />;
  }

  // process the name list, delete travelers, and - in names
  let nameList;
  nameList = charaNames.filter((name) => {
    return name.includes("traveler") === false;
  });
  nameList = nameList.map((name) => {
    if (name.includes("-")) {
      name = name.replace("-", " ");
    }
    return name;
  });

  return (
    <section className="charas-list">
      {nameList.map((name, index) => (
        <CharacterCard key={index} charaName={name} />
      ))}
    </section>
  );
};

export default AllCharactersList;

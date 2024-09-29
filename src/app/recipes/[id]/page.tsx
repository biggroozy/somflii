import React from "react";

const Recipes = ({ params }: { params: { id: string } }) => {
  return <div>Recipe #{params.id}</div>;
};

export default Recipes;

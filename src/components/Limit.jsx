import React from "react";

function Limit({ content, limit }) {
  const words = content.split(" ");
  const slicedWords = words.slice(0, limit);
  const limitedText = slicedWords.join(" ");
  return <>{limitedText}</>;
}

export default Limit;

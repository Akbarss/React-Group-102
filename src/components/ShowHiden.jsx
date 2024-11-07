import React, { useState } from "react";

function ShowHideComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"} Component</button>
      {isVisible && <p>This is a toggleable component.</p>}
    </div>
  );
}

export default ShowHideComponent;

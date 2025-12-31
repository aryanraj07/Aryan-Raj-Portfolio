import { useState } from 'react';


const useTheme = () => {

  const handleSmoothScroll = (event, link) => {
    event.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return {   handleSmoothScroll };
}

export default useTheme;

import { useEffect, useState } from "react";
import { useScroll } from "../../hooks/useScroll";

export const useShowButton = (): boolean => {
  const scrollPosition = useScroll();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (scrollPosition > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollPosition]);
  return showButton;
};

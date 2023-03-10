import { useShowButton } from "./useShowButton";
import { VscArrowUp } from "react-icons/vsc";
import { ScrollToTopButton } from "./style";

export const ScrollToTop = () => {
  const showButton = useShowButton();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ScrollToTopButton onClick={handleScrollToTop} showButton={showButton}>
      <VscArrowUp size={24} />
    </ScrollToTopButton>
  );
};

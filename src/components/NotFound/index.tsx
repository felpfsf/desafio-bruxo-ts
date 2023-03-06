import { Box, ImageBox } from "./style";

export const NotFound = () => {
  return (
    <Box>
      <ImageBox>
        <img src='/images/sorting_hat-icon.png' alt='' />
      </ImageBox>
      <h1>Nenhum personagem encontrado</h1>
    </Box>
  );
};

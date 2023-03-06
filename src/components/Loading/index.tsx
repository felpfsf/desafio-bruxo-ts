import { Box, Spinner } from "./style";

export const Loading = () => {
  return (
    <Box>
      <Spinner></Spinner>
      <p>Carregando...</p>
    </Box>
  );
};

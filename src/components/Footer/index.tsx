import { NavbarContainer } from "./style";
export const Footer = () => {
  return (
    <NavbarContainer>
      <div>
        <h1>Desafio Bruxo</h1>
        <h3>Um compêndio de seus bruxos favoritos</h3>
        <p>
          <a
            href='https://github.com/felpfsf/DesafioBruxo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Desafio Bruxo &copy; 2022
          </a>{" "}
          - Desenvolvido por{" "}
          <a
            href='https://github.com/felpfsf'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            Felipe F
          </a>
        </p>
      </div>
    </NavbarContainer>
  );
};

import Container from "./Container";

const Navbar = () => {
  return (
    <header className="bg-(--prussian-blue)">
      <Container>
        <nav className="h-30">
          <h1 className="font-attention text-7xl">
            SAPPHIRE
          </h1>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

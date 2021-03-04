import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";
import Switch from "react-switch";
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

export default function Header({ toggleTheme }: Props) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello world
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
}

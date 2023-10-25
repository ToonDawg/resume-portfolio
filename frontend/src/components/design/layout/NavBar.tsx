import { FloatButton, Menu, MenuProps } from "antd";
import {
  HomeOutlined,
  ExpandOutlined,
  UserOutlined,
  ProjectOutlined,
  ContactsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useContext, useMemo, useState } from "react";
import styled from "styled-components";
import { SettingsButton } from "./SettingsButton";
import { ThemeContext } from "../../Context/ThemeContext";
import Title from "antd/es/typography/Title";
import { Grid } from "antd";
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const FloatingHeader = styled(Title)<{ $isMd?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  margin: ${({ $isMd }) => ($isMd ? "5px 10px" : "5px")};
  padding: 5px;
  color: white;
  font-family: Pacifico;
  font-size: ${({ $isMd }) => ($isMd ? "3rem" : "initial")};
`;

const StyledMenu = styled(Menu)<{ $isMd?: boolean }>`
  width: 100%;
  justify-content: ${({ $isMd }) => ($isMd ? "right" : "center")};
`;

const StyledCustomLabel = styled.div`
display: flex;
gap: 5px
`

interface CustomLabelProps {
  label: Label;
  icon: React.ReactNode;
}

type Label = 'Home' | 'About' | 'Contact' | 'Projects'

const CustomLabel = ({ label, icon }: CustomLabelProps) => {
  const screens = useBreakpoint();
  return (
    <StyledCustomLabel>
      <span>{icon}</span>
      {screens.md && <>{label}</>}
    </StyledCustomLabel>
  );
};

const useMenu = () => {
  const themeToggle = useContext(ThemeContext);

  const NavigationItems = useMemo(() => {
    const items: MenuProps["items"] = [
      { label: <CustomLabel label="Home" icon={<HomeOutlined />} />, key: "/" },
      {
        label: <CustomLabel label="About" icon={<UserOutlined />} />,
        key: "/about",
      },
      {
        label: <CustomLabel label="Projects" icon={<ProjectOutlined />} />,
        key: "projects",
      },
      {
        label: <CustomLabel label="Contact" icon={<ContactsOutlined />} />,
        key: "contact",
      },
      {
        label: <SettingOutlined />,
        key: "settings",
        children: [
          {
            label: <SettingsButton label="Dark Mode" toggle={themeToggle} />,
            key: "",
          },
        ],
      },
    ];
    return items;
  }, [themeToggle]);

  return NavigationItems;
};

export const NavBar = () => {
  const [current, setCurrent] = useState<Label>("Home");
  const screens = useBreakpoint();
  const navigate = useNavigate();

  return (
    <>
      <FloatingHeader $isMd={screens.md}>
        {screens.md ? "Tunoa Johnson" : "TJ"}
      </FloatingHeader>
      <StyledMenu
        $isMd={screens.md}
        onClick={(e) => navigate(e.key)}
        selectedKeys={[current]}
        mode="horizontal"
        items={useMenu()}
      />
    </>
  );
};

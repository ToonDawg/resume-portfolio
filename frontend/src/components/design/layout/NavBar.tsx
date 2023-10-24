
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
import { useNavigate } from 'react-router-dom';
const { useBreakpoint } = Grid;


const FloatingHeader = styled(Title)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5;
  padding: 5;
`;

interface CustomLabelProps {
    label: string;
    icon: React.ReactNode;
}

const CustomLabel = ({ label, icon }: CustomLabelProps) => {
    const screens = useBreakpoint();
    return (
        <>
            <span style={{ marginRight: '5px' }}>{icon}</span>
            {screens.md && <>{label}</>}

        </>
    );
};

const useMenu = () => {
    const themeToggle = useContext(ThemeContext);

    const NavigationItems = useMemo(() => {
        const items: MenuProps["items"] = [
            {
                label: <CustomLabel label="Home" icon={<HomeOutlined />} />,
                key: "/",
            },
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
    const [current, setCurrent] = useState('home');
    const screens = useBreakpoint();
    const navigate = useNavigate();


    const onClick: MenuProps['onClick'] = (e) => {
        console.log(e)
        navigate(e.key);
    };
    return (
        <>
            {screens.md ?
                <FloatingHeader style={{ color: 'white', fontFamily: 'Pacifico', fontSize: '3rem', margin: '5px 10px' }} >
                    Tunoa Johnson
                </FloatingHeader> :
                <FloatingHeader style={{
                    margin: 10, fontFamily: 'Pacifico'
                }}>
                    TJ
                </FloatingHeader >}
            <Menu onClick={onClick} selectedKeys={[current]} style={{ width: '100%', justifyContent: screens.md ? 'right' : 'center' }} mode="horizontal" items={useMenu()} />

        </>
    );
};

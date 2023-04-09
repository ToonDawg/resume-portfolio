import styled, { withTheme } from "styled-components"
import { Header } from 'antd/es/layout/layout';
import { NavBar } from "./NavBar";
import { ToggleType } from "../../../hooks/useToggle";
import { ThemeContext } from "../../Context/ThemeContext";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";

const StyleHeader = styled(Header)`
    display: flex;
    width: 100%;
    padding: 0;
    background: transparent;
    `
const FloatingHeader = styled(Title)`
     position: absolute;
     top: 0;
     left: 0;
     margin: 5;
     padding: 5;
    `


export const StyledHeader = ({ isDarkMode }: { isDarkMode: ToggleType }) => {

    return (
        <ThemeContext.Provider value={isDarkMode}>

            <StyleHeader>
                <FloatingHeader style={{ margin: 10 }}>
                    Tunoa Johnson
                </FloatingHeader>
                <NavBar />
            </StyleHeader>
        </ThemeContext.Provider>
    );
};
import styled, { withTheme } from "styled-components"
import { Header } from 'antd/es/layout/layout';
import { NavBar } from "./NavBar";
import { ToggleType } from "../../../hooks/useToggle";
import { ThemeContext } from "../../Context/ThemeContext";



const StyleHeader = styled(Header)`
    display: flex;
    width: 100%;
    padding: 0;
    background: transparent;
    `

export const StyledHeader = ({ isDarkMode }: { isDarkMode: ToggleType }) => {

    return (
        <ThemeContext.Provider value={isDarkMode}>
            <StyleHeader>
                <NavBar />
            </StyleHeader>
        </ThemeContext.Provider>
    );
};
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home/HomePage";
import { ConfigProvider, theme, Layout } from "antd";
import { useToggle } from "./hooks/useToggle";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import { StyledHeader } from "./components/design/layout/Header";
import { AboutPage } from "./components/About/AboutPage";

const { defaultAlgorithm, darkAlgorithm } = theme;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const App: React.FC = () => {
  const isDarkMode = useToggle(true);

  return (
    <ConfigProvider
      key={isDarkMode.state ? "dark" : "light"}
      theme={{
        algorithm: isDarkMode.state ? darkAlgorithm : defaultAlgorithm,
        hashed: false,
        token: { colorPrimary: "c74734" },
      }}
    >
      <BrowserRouter>
        <StyledLayout>
          <StyledHeader isDarkMode={isDarkMode} />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Content>
        </StyledLayout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;

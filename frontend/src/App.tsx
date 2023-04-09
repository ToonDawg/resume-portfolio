import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/Home/HomePage';
import { ConfigProvider, theme, Button, Card, Layout } from "antd";
import { useToggle } from './hooks/useToggle';
import { Content, Header } from 'antd/es/layout/layout';
import { StyledHeader } from './components/design/layout/Header';

// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

const App = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const isDarkMode = useToggle(true)
  return (
    <ConfigProvider
      key={isDarkMode.state ? 'dark' : 'light'}
      theme={{ algorithm: isDarkMode.state ? darkAlgorithm : defaultAlgorithm, hashed: false, token: { colorPrimary: 'c74734' } }}>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <StyledHeader isDarkMode={isDarkMode} />
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App

import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import UploadForm from './components/UploadForm';
import { lightTheme, darkTheme, GlobalStyles } from './darkLightMode/theme';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

const StyledApp = styled.div`
max-width: 960px;
margin: 0 auto;

`


function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const childrenComponents =
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyles />
      <StyledApp>
        <NavBar theme={theme} themeToggler={themeToggler} />
        <UploadForm theme={theme} />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </StyledApp>
    </ThemeProvider>

  return (
    <Routes>
      <Route path='/' element={<HomePage />} >

      </Route>
      <Route path='/gallery' element={childrenComponents} >

      </Route>
    </Routes>
  );
}

export default App;


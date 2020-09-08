import React from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from './schedule';
import { useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = (e) => {
    setAnchorEl(null);
    // setCurrentCurrency(e.currentTarget.textContent)
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={openMenu}>412</p>
        <Menu
          className='exchange-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(true && anchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={closeMenu}>{`411`}</MenuItem>
          <MenuItem onClick={closeMenu}>{`416`}</MenuItem>
          <MenuItem onClick={closeMenu}>{`your`}</MenuItem>
        </Menu>
        <div className='contacts' onClick={() => history.push('/io-timetable/contacts')}>contacts</div>
        <a href="https://m.cs.msu.ru/s/N6FkcmFbxQkS8z9" className='materials'>materials</a>
        <Schedule />
      </header>
    </div>
  );
}

export default App;

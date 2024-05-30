import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Home from './components/Home'
import Friends from './components/Friends'
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import { Routes, Route } from 'react-router-dom';


export function App() {

  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="friends" element={<Friends/>}/>
        </Routes>
  );
}
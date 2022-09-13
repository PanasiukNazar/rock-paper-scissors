import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import '../styles/main.scss';
import Application from '../components/Application.jsx';

const root = ReactDomClient.createRoot(document.getElementById('root'));

root.render(<Application />);

import { FC } from 'react';
import './App.scss';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: FC = () => (
  <>
    <Navbar>Siema</Navbar>
    {/* <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1>
    <h1>content</h1> */}
    <Footer />
  </>
);

export default App;

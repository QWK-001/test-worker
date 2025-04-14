import React from 'react';
import Banner from './banner';
import GamerHome from './gamerHome';
import NavBar from './navBar';
import TopBar from './topBar';

const SubjectPage: React.FC = () => {
  return (
    <div>
      <Banner />
      <TopBar />
      <NavBar />
      <GamerHome />
    </div>
  );
};

export default SubjectPage;

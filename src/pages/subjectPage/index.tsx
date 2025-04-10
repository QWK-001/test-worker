import React from 'react';
import Banner from './banner';
import GamerHome from './gamerHome';
import NavBar from './navBar';

const SubjectPage: React.FC = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <GamerHome />
    </div>
  );
};

export default SubjectPage;

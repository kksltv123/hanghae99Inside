import React from 'react';
import CreateGallery from '../create/CreateGallery';
import Responsive from '../common/Responsive';
import CreateActionButton from '../create/CreateActionButton';
import Header from '../common/Header';


const Create = () => {
  return (
    <>
    <Header />
    <Responsive>
      <CreateGallery />
      {/* <CreateActionButton /> */}
    </Responsive>
    </>
    
  );
};

export default Create;
import React from 'react';
import Responsive from '../common/Responsive';
import CreateActionButtons from '../create/CreateActionButton';
import Header from '../common/Header';
// import CreateContainer from '../create/CreateContainer';
import CreateGallery from '../create/CreateGallery';

const Create = () => {
    return (
        <>
        <Header/>
        <Responsive>
          <CreateGallery />
          <CreateActionButtons />
        </Responsive>
        </>
        
      );
};

export default Create;
import React, { useState } from 'react';
import { useDispatch } from "react-redux"


const CreateGallery = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div>
          확인
        </div>
    );
};

export default CreateGallery;
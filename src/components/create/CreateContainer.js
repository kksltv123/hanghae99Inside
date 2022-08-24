import React, { useEffect, useCallback } from "react";
import CreateGallery from "./CreateGallery";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize } from "../../redux/modules/createSlice";

const CreateContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({
      title: write.title,
      body: write.body,
    }));
  
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
      dispatch,
    ]);
  
    // 언마운트될 때 초기화
    useEffect(() => {
      return () => {
        dispatch(initialize());
      };
    }, [dispatch]);
  
    return <CreateGallery onChangeField={onChangeField} title={title} body={body} />;
  };
  
  export default CreateContainer;
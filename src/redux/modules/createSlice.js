import { createAction, handleActions } from "redux-actions";

const INITIALIZE = 'create/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'create/CHANGE_FIELD'; // 특정 key 값 바꾸기

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: '',
  body: '',
};

const createSlice = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
  },
  initialState,
)

export default createSlice;
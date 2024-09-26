import { configureStore } from '@reduxjs/toolkit'
import skillReducer from '../features/skill/skillSlice'

// SECTION: 리듀서
const store = configureStore({
  reducer: {
    // 작명 : user.reducer -> 추후 작명이라는 이름으로 가져다 씀
    skill: skillReducer,
  }
})

// SECTION: 타입 정의
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
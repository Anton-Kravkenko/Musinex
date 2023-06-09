import { authReducer } from '@/redux/auth/auth.slice'
import { historyReducer } from '@/redux/player/history/history.slice'
import { combineReducers } from '@reduxjs/toolkit'
import { playerReducer } from './player/player.slice'
import { ThemeReducer } from './settings/theme.slice'

export const reducers = combineReducers({
	theme: ThemeReducer,
	player: playerReducer,
	auth: authReducer,
	history: historyReducer
})

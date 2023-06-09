import { errorToast } from '@/ui/toast/error.toast'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { Middleware, MiddlewareAPI } from 'redux'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			errorToast(action.error)
		}

		return next(action)
	}

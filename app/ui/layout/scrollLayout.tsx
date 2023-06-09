import UScrollView from '@/ui/scroll-view/uScrollView'
import { UScrollViewProps } from '@/ui/scroll-view/uScrollView.types'
import { useQueryClient } from '@tanstack/react-query'
import { FC, memo, PropsWithChildren, useCallback, useState } from 'react'
import { RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ScrollLayout: FC<PropsWithChildren<UScrollViewProps>> = ({
	children,
	paddingBottom = 80,
	...props
}) => {
	const [isRefreshing, setRefreshing] = useState(false)
	const queryClient = useQueryClient()
	const onRefresh = useCallback(async () => {
		setRefreshing(true)
		await queryClient.resetQueries()
		setRefreshing(false)
	}, [])
	return (
		<SafeAreaView>
			<UScrollView
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
				}
				className='p-2'
				paddingBottom={paddingBottom}
				{...props}>
				{children}
			</UScrollView>
		</SafeAreaView>
	)
}

export default memo(ScrollLayout)

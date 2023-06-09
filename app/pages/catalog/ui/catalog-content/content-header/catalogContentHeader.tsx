import { CatalogContentHeaderProps } from '@/pages/catalog/ui/catalog-content/content-header/catalogContentHeader.types'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { Animated, View } from 'react-native'
import { HEADER_HEIGHT } from '../../../catalog.constant'

const CatalogContentHeader: FC<CatalogContentHeaderProps> = ({
	title,
	description,
	y
}) => {
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	})

	return (
		<Animated.View className='z-10 px-3' style={{ opacity }}>
			<Title
				translate={true}
				weight='semiBold'
				size={40}
				className='mb-2 pr-8 font-semibold'
				numberOfLines={2}>
				{title}
			</Title>
			<View className='mb-4 flex-row items-center opacity-40'>
				<Title>{description}</Title>
			</View>
		</Animated.View>
	)
}

export default CatalogContentHeader

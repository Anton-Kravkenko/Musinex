import { ICatalogContent } from '@/pages/catalog/ui/catalog-content/catalogContent.types'
import { color } from '@/utils/color'
import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC, PropsWithChildren, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { HEADER_HEIGHT } from '../../catalog.constant'
import CatalogContentHeader from './content-header/catalogContentHeader'

const CatalogContent: FC<PropsWithChildren<ICatalogContent>> = ({
	y,
	children,
	gradientEnd = 0.8,
	description,
	paddingTop = HEADER_HEIGHT * 0.52,
	headerTitle
}) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	const { colorScheme } = useColorScheme()
	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{ useNativeDriver: true }
			)}
			contentContainerStyle={{
				paddingTop: paddingTop,
				paddingBottom: 50,
				zIndex: 100
			}}
		>
			<CatalogContentHeader
				description={description}
				title={headerTitle}
				y={y}
			/>
			<LinearGradient
				style={{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT / 0.9
				}}
				start={[0, 0.1]}
				end={[0, gradientEnd]}
				colors={[
					'transparent',
					colorScheme === 'light'
						? color.silver
						: color.midnight
				]}
			/>
			<View
				style={{
					backgroundColor:
						colorScheme === 'light'
							? color.silver
							: color.midnight
				}}
				className='pt-1 px-3 pb-5 w-full flex-1'
			>
				{children}
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent

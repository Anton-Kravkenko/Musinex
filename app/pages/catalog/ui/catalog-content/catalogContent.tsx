import { ICatalogTypes } from '@/types/catalogTypes'
import { getHexCode } from '@/utils/getColor'
import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC, PropsWithChildren, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { HEADER_HEIGHT } from '../../catalogConstant'
import CatalogContentHeader from './catalogContentHeader'

interface ICatalogContent extends ICatalogTypes {
	headerTitle: string
	description: string
}
const CatalogContent: FC<PropsWithChildren<ICatalogContent>> = ({
	y,
	children,
	description,

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
				paddingTop: HEADER_HEIGHT * 0.45,
				paddingBottom: 50
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
					height: HEADER_HEIGHT / 0.8
				}}
				start={[0, 0.1]}
				end={[0, 0.8]}
				colors={[
					'transparent',
					colorScheme === 'light'
						? getHexCode('lightGray')
						: getHexCode('primaryBlack')
				]}
			/>
			<View
				style={{
					backgroundColor:
						colorScheme === 'light'
							? getHexCode('lightGray')
							: getHexCode('primaryBlack')
				}}
				className='pt-1 px-3 pb-5 w-full flex-1'
			>
				{children}
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent

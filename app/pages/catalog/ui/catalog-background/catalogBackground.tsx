import { useColorTheme } from '@/hook/useColorTheme'
import { useBackgroundAnimation } from '@/pages/catalog/ui/catalog-background/background.animation'
import { CatalogBackgroundProps } from '@/pages/catalog/ui/catalog-background/catalogBackground.types'
import Image from '@/ui/image/image'
import { Color } from '@/utils/color'
import { WINDOW_WIDTH } from '@/utils/screen'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HEADER_HEIGHT } from '../../catalog.constant'

const CatalogBackground: FC<CatalogBackgroundProps> = ({
	poster,
	color = Color.primary,
	y
}) => {
	const { top } = useSafeAreaInsets()
	const { silverToMidnight } = useColorTheme()
	const { translateY, opacity, scale } = useBackgroundAnimation(y)
	return (
		<Animated.View
			style={[
				{
					...StyleSheet.absoluteFillObject,
					height: HEADER_HEIGHT * 1.77,
					marginTop: -top,
					opacity,
					transform: [{ scale }, { translateY }]
				}
			]}>
			{poster ? (
				<>
					<Image
						style={StyleSheet.absoluteFill}
						url={poster}
						width={WINDOW_WIDTH}
						height={HEADER_HEIGHT}
					/>
					<LinearGradient
						style={{
							...StyleSheet.absoluteFillObject,
							top: -HEADER_HEIGHT * 1.8
						}}
						start={[0, 0.1]}
						end={[0, 0.8]}
						colors={['transparent', 'rgba(0, 0, 0, 0.2)', silverToMidnight]}
					/>
				</>
			) : (
				<LinearGradient
					style={{
						...StyleSheet.absoluteFillObject,
						top: -HEADER_HEIGHT * 1.6
					}}
					start={[0, 0.1]}
					end={[0, 0.8]}
					colors={[color, 'transparent']}
				/>
			)}
		</Animated.View>
	)
}

export default CatalogBackground

import { AnimatedView } from '@/animation/global'
import { IHeartProps } from '@/types/catalogTypes'
import { Style, UPressableProps } from '@/types/global'
import { useHeart } from '@/ui/icon/heart/useHeart'
import { useHeartAnimation } from '@/ui/icon/heart/useHeartAnimation'
import { getHexCode } from '@/utils/getColor'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC, memo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { withSpring } from 'react-native-reanimated'

interface IHeart extends UPressableProps, IHeartProps {
	size?: number
}

const Heart: FC<IHeart> = ({ size = 28, type, id, style, ...props }) => {
	const { toggleFavorite, isSmashed } = useHeart({ id, type })
	const { outlineStyle, fillStyle, liked } = useHeartAnimation(isSmashed)

	return (
		<Pressable
				onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
			style={[{ height: size, width: size }, style as Style]}
			{...props}
		>
			<AnimatedView
				style={[StyleSheet.absoluteFill, outlineStyle, style as Style]}
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={size}
					color={getHexCode('white')}
				/>
			</AnimatedView>

			<AnimatedView style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={size}
					color={getHexCode('primaryRed')}
				/>
			</AnimatedView>
		</Pressable>
	)
}

export default memo(Heart)

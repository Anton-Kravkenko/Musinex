import { usePressAnimation } from '@/animation/usePressAnimation'
import { ICatalogRenderType } from '@/types/catalogTypes'
import { UPressableProps } from '@/types/global'
import Heart from '@/ui/icon/heart/heart'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import Animated from 'react-native-reanimated'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ISongItem extends UPressableProps {
	image: {
		uri: string
		width: number
		height: number
		border?: number
	}
	text1: string
	text2?: string
	id: number
	noHeart?: boolean
	textSize?: number
	type: ICatalogRenderType
}

const CatalogItem: FC<ISongItem> = ({
	id,
	textSize = 22,
	image,
	noHeart,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<Pressable
			className='flex-row items-center mb-3 justify-between'
			{...pressFunctions}
			{...props}
		>
			<Animated.View className={'flex-row items-center'} style={animatedStyle}>
				<UImage
					source={image.uri}
					borderRadius={image.border}
					width={image.width}
					height={image.height}
				/>
				<View
					className='ml-3'
					style={{
						width: !noHeart ? '70%' : '74%'
					}}
				>
					<Title
						fontFamily={'Montserrat_600SemiBold'}
						numberOfLines={1}
						size={textSize}
					>
						{props.text1}
					</Title>
					{props.text2 && (
						<Title
							color={'lightGray'}
							fontFamily={'Montserrat_300Light'}
							size={textSize * 0.75}
						>
							{props.text2}
						</Title>
					)}
				</View>
			</Animated.View>
			{!noHeart && <Heart id={id} type={props.type} />}
		</Pressable>
	)
}

export default CatalogItem

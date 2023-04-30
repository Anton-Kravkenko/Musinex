import React, { FC, memo } from 'react'
import { Pressable, View } from 'react-native'
import { IFlatListItem } from '../../../types/flatListTypes'
import UImage from '../../image/fastimage'
import Title from '../../title/title'

const TrackItem: FC<IFlatListItem> = ({
	                                      name,
	                                      artists,
	                                      image,
	                                      WrapClassNames,
	                                      ImageClassNames,
	                                      ...rest
                                      }) => {
	return (
		<Pressable
			className={WrapClassNames}
			style={{
				width: image.width,
				maxWidth: image.width
			}}
			{...rest}
		>
			<UImage
				className={ImageClassNames}
				source={image.url}
				height={image.height}
				width={image.width}
			/>
			<View
				style={{
					marginTop: 5,
					alignItems: 'center'
				}}
			>
				<Title
					text={name}
					numberOfLines={1}
					size={20}
					fontFamily={'Montserrat_600SemiBold'}
				/>
				<Title
					text={'by ' + artists}
					className={'mt-1'}
					size={14}
					fontFamily={'Montserrat_500Medium'}
					numberOfLines={1}
					color='silver'
				/>
			</View>
		</Pressable>
	)
}

export default memo(TrackItem)

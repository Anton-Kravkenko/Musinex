import React, { FC, memo } from 'react'

import { Pressable, View } from 'react-native'
import { useTypedNavigation } from '../../../hook/useTypedNavigation'
import { IFlatListSongItem } from '../../../types/FlatListTypes'
import UImage from '../../image/Image'
import Title from '../../title/title'

const TrackItem: FC<IFlatListSongItem> =
	({
		 name,
		 artists,
		 image,
		 WrapClassNames,
		 ImageClassNames,
		 songId,
		 ...rest
	 }) => {
		const { navigate } = useTypedNavigation()
		return (
			<Pressable className={WrapClassNames} style={{
				width: image.width,
				maxWidth: image.width
			}} onPress={() => navigate('Song', {
				id: songId
			})} {...rest}>
				<UImage
					className={ImageClassNames}
					source={image.url}
					height={image.height}
					width={image.width}
				/>
				<View style={{
					marginTop: 5,
					alignItems: 'center'
				}}>
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

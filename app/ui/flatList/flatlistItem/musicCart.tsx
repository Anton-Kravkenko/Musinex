import { IFlatListItem } from '@/types/flatListTypes'
import I18n from 'i18n-js'
import React, { FC, memo } from 'react'
import { Pressable, View } from 'react-native'
import UImage from '../../image/image'
import Title from '../../title/title'

const MusicCart: FC<IFlatListItem> =
	({
		 image,
		 name,
		 artists,
		 WrapClassNames,
		 ImageClassNames,
		 textCenter = false,
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
						margin: 5,
						alignItems: textCenter ? 'center' : 'flex-start'
					}}
				>
					<Title
						numberOfLines={1}
						size={20} className={'w-11/12'}
						fontFamily={'Montserrat_600SemiBold'}
					>
						{name}
					</Title>
					{artists && (
						<Title
							className={'mt-1'}
							numberOfLines={1}
							color={'silver'}
							size={14}
							fontFamily={'Montserrat_500Medium'}
						>
							{I18n.t('by') + artists}
						</Title>
					)}
				</View>
			</Pressable>
		)
	}

export default memo(MusicCart)

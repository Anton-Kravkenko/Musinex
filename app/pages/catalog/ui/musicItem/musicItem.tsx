import React, { FC } from 'react'

import { View } from 'react-native'
import Icon from '../../../../ui/icon/defaultIcon/Icon'
import UImage from '../../../../ui/image/Image'
import Title from '../../../../ui/title/title'

export interface IMusicItem {
	title: string
	image: string
	artist: string
	likeFunc: () => void
}

const MusicItem:FC<IMusicItem> = (props) => {
	return (
	<View className='flex-row items-center mb-3 w-full justify-between'>
			<View className={'flex-row items-center'}>
	<UImage source={props.image} classNames={'rounded-md'} width={80} height={80}/>
		<View className='ml-3 max-w-[200px]'>
			<Title text={props.title} />
			<Title text={props.artist} />
			</View>
		</View>
		<Icon	name={'heart'} size={25} onPress={props.likeFunc}/>
	</View>
	)
}

export default MusicItem

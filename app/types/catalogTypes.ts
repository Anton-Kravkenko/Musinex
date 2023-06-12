import { Animated } from 'react-native'

export interface ICatalogList {
	id: number
	title: string
	image: string
	artist: string
	url: string
}

export interface ICatalogTypes {
	y: Animated.Value
}

export type ICatalogRenderType = 'song' | 'album' | 'playlist' | 'artist'

export interface IHeartProps {
	id: number
	type: ICatalogRenderType
}

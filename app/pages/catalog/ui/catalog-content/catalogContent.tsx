import { useAction } from '@/hook/useAction'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { ICatalogList, ICatalogTypes, IHeartProps } from '@/types/catalogTypes'
import CatalogArtistItem from '@/ui/flatList/catalogItem/catalogArtistItem'
import CatalogSongItem from '@/ui/flatList/catalogItem/catalogSongItem'
import MusicItem from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { cutString } from '@/utils/cutString'
import { getHexCode } from '@/utils/getColor'
import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { HEADER_HEIGHT } from '../../catalogConstant'
import CatalogContentHeader from './catalogContentHeader'

interface ICatalogContent extends ICatalogTypes, IHeartProps {
	DataList: ICatalogList[]
	headerTitle: string
	description?: string
}

const CatalogContent: FC<ICatalogContent> = ({
	y,
	description,
	type,
	DataList,
	headerTitle
}) => {
	const { t } = useTranslation()
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	const {addToPlayer} = useAction()
	const { navigate } = useTypedNavigation()
	const { colorScheme } = useColorScheme()
	if (!DataList) return <FullScreenLoader />
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
				paddingTop: HEADER_HEIGHT / 1.3,
				paddingBottom: 50
			}}
		>
			<CatalogContentHeader
				description={
					description
						? description
						: t('by') +
						  DataList[0].artist +
						  (DataList.some(item => item.artist !== DataList[0].artist)
								? t('and other')
								: '')
				}
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
				<UFlatList
					extraData={DataList}
					maxToRenderPerBatch={10}
					initialNumToRender={10}
					scrollEnabled={false}
					numColumns={type === 'playlists' || type === 'albums' ? 2 : 1}
					data={DataList}
					renderItem={({ item, index }) => {
						if (type === 'songs') {
							return (
								<CatalogSongItem
									id={item.id}
									title={item.title}
									image={item.image}
									artist={item.artist}
									playFunc={() => {
											addToPlayer({
												data: DataList.map(track => {
													return {
														id: track.id,
														title: track.title,
														url: track.url,
														artist: track.artist,
														artwork: track.image
													}
												}),
												songIndex: index
											})
									}}
								/>
							)
						} else if (type === 'artists') {
							return (
								<CatalogArtistItem
									id={item.id}
									onPress={() =>
										navigate('ArtistWrapperCatalog', {
											artistId: item.id
										})
									}
									name={item.title}
									image={item.image}
								/>
							)
						} else {
							return (
								<MusicItem
									textCenter={false}
									className='w-[50%] p-2 mt-2 mb-2'
									onPress={() =>
										type === 'albums'
											? navigate('AlbumWrapperCatalog', { albumId: item.id })
											: navigate('PlayListWrapperCatalog', {
													playListId: item.id
											  })
									}
									image={{ url: item.image, height: 180, width: 180 }}
									name={cutString(item.title, 10)}
								/>
							)
						}
					}}
				/>
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent

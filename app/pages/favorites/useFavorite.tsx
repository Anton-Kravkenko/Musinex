import React from 'react'
import { useDispatch } from 'react-redux'

export const useFavorite = () => {
	const dispatch = useDispatch()
	// const tabs = [
	// 	{
	// 		name: 'songs',
	// 		title: 'Songs',
	// 		component: () => {
	// 			return (
	// 				<UFlatList
	// 					ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
	// 					data={selector.songs}
	// 					contentContainerStyle={{ paddingBottom: 50 }}
	// 					renderItem={({ item, index }) => {
	// 						return (
	// 							<RenderItem
	// 								playFunc={() => {
	// 									console.log('play')
	// 								}}
	// 								id={item.id}
	// 								type={'songs'}
	// 							/>
	// 						)
	// 					}}
	// 				/>
	// 			)
	// 		}
	// 	},
	// 	{
	// 		name: 'albums',
	// 		title: 'Albums',
	// 		component: () => {
	// 			return (
	// 				<UFlatList
	// 					contentContainerStyle={{ paddingBottom: 100 }}
	// 					numColumns={2}
	// 					data={selector.albums}
	// 					renderItem={({ item }) => {
	// 						return (
	// 							<RenderItem
	// 								id={item.id}
	// 								type={'albums'}
	// 							/>
	// 						)
	// 					}}
	// 				/>
	// 			)
	// 		}
	// 	},
	// 	{
	// 		name: 'Artists',
	// 		title: 'Artists',
	// 		component: () => {
	// 			return (
	// 				<UFlatList
	// 					data={selector.artists}
	// 					contentContainerStyle={{ paddingBottom: 100 }}
	// 					ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
	// 					renderItem={({ item }) => {
	// 						console.log(item)
	// 						return (
	// 							<RenderItem
	// 								id={item.id}
	// 								type={'artists'}
	// 							/>
	// 						)
	// 					}}
	// 				/>
	// 			)
	// 		}
	// 	},
	// 	{
	// 		name: 'playlists',
	// 		title: 'Playlists',
	// 		component: () => {
	// 			return (
	// 				<UFlatList
	// 					numColumns={2}
	// 					contentContainerStyle={{ paddingBottom: 100 }}
	// 					ListEmptyComponent={() => <FlatList404 height={150} width={150} />}
	// 					data={selector.playlists}
	// 					renderItem={({ item }) => {
	// 						console.log(item)
	// 						return (
	// 							<RenderItem
	// 								id={item.id}
	// 								type={'playlists'}
	// 							/>
	// 						)
	// 					}}
	// 				/>
	// 			)
	// 		}
	// 	}
	// ]
	// return { tabs }
}

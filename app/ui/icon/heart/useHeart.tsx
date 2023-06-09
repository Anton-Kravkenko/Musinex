import { useFavorites } from '@/pages/favorites/useFavorites'
import { userServices } from '@/services/user.services'
import { HeartProps } from '@/ui/icon/heart/heart.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'

export const useHeart = ({ id, type }: HeartProps) => {
	const [isSmashed, setIsSmashed] = useState(false)
	const queryClient = useQueryClient()
	const { user } = useFavorites()
	const favoriteType =
		type === 'song'
			? 'favoritesSong'
			: type === 'album'
			? 'favoritesAlbum'
			: type === 'artist'
			? 'favoritesArtist'
			: 'favoritePlayLists'
	useEffect(() => {
		if (!user) return

		const isFavorite = user[favoriteType].some(obj => obj.id === id)
		if (isSmashed !== isFavorite) setIsSmashed(isFavorite)
	}, [user, isSmashed, id, type])
	const { mutate: toggleFavorite } = useMutation(
		['update favorites'],
		() =>
			userServices.toggleFavorite({
				type,
				id
			}),
		{
			async onSuccess() {
				await queryClient.invalidateQueries(['favoriteSongs'])
				await queryClient.invalidateQueries(['favorite'])
			}
		}
	)

	return useMemo(
		() => ({
			toggleFavorite,
			isSmashed
		}),
		[toggleFavorite, isSmashed]
	)
}

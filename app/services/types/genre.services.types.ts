import { DefaultModelFields, SongType } from '@/services/types/global'
import { AlbumTypes } from '@/services/types/IAlbum'
import { PlaylistType } from '@/services/types/playlist.services.types'

export interface GenreType extends DefaultModelFields {
	color: string
	icon: string
	name: string
	songs: SongType[]
	albums: AlbumTypes[]
	playlists: PlaylistType[]
}

export type GenreListType = Omit<GenreType[], 'albums' | 'playlists' | 'songs'>

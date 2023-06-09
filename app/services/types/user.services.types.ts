import { AlbumTypes } from '@/services/types/album.services.types'
import { ArtistType } from '@/services/types/artist.services.types'
import { DefaultModelFields, SongType } from '@/services/types/global'
import { PlaylistType } from '@/services/types/playlist.services.types'

export interface UserType extends DefaultModelFields {
	email: string
	name: string
	userPlaylists: PlaylistType[]
	favoritePlayLists: PlaylistType[]
	favoritesAlbum: AlbumTypes[]
	favoritesArtist: ArtistType[]
	favoritesSong: SongType[]
}

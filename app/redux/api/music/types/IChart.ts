export interface IChart {
	tracks: Tracks
	albums: Albums
	artists: Artists
	playlists: Playlists
	podcasts: Podcasts
}

export interface Albums {
	data: AlbumsDatum[]
	total: number
}

export interface AlbumsDatum {
	id: number
	title: string
	link: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	record_type: RecordTypeEnum
	tracklist: string
	explicit_lyrics: boolean
	position: number
	artist: ArtistElement
	type: RecordTypeEnum
}

export interface ArtistElement {
	id: number
	name: string
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	radio: boolean
	tracklist: string
	type: ArtistType
	position?: number
}

export enum ArtistType {
	Artist = 'artist'
}

export enum RecordTypeEnum {
	Album = 'album'
}

export interface Artists {
	data: ArtistElement[]
	total: number
}

export interface Playlists {
	data: PlaylistsDatum[]
	total: number
}

export interface PlaylistsDatum {
	id: number
	title: string
	public: boolean
	nb_tracks: number
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	checksum: string
	tracklist: string
	creation_date: Date
	md5_image: string
	picture_type: PictureTypeEnum
	user: User
	type: PictureTypeEnum
}

export enum PictureTypeEnum {
	Playlist = 'playlist'
}

export interface User {
	id: number
	name: string
	tracklist: string
	type: UserType
}

export enum UserType {
	User = 'user'
}

export interface Podcasts {
	data: PodcastsDatum[]
	total: number
}

export interface PodcastsDatum {
	id: number
	title: string
	description: string
	available: boolean
	fans: number
	link: string
	share: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	type: PurpleType
}

export enum PurpleType {
	Podcast = 'podcast'
}

export interface Tracks {
	data: TracksDatum[]
	total: number
}

export interface TracksDatum {
	id: number
	title: string
	title_short: string
	title_version: string
	link: string
	duration: number
	rank: number
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	md5_image: string
	position: number
	artist: ArtistElement
	album: Album
	type: string
}

export interface Album {
	id: number
	title: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	tracklist: string
	type: RecordTypeEnum
}

import { getArtistUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { ArtistType } from '@/services/types/artist.services.types'

export const artistServices = {
	async getById(id: number) {
		return request<ArtistType>({
			url: getArtistUrl(`/${id}`),
			method: 'GET'
		})
	}
}

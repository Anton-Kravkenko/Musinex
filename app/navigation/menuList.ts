import { TypeRootStackParamList } from '../types/navigation/navigationTypes'

export interface IMenuItem {
	iconName: string
	path: keyof TypeRootStackParamList
}

export const menuItems: IMenuItem[] = [
	{
		iconName: 'search',
		path: 'Search'
	},
	{
		iconName: 'home',
		path: 'Home'
	},

	{
		iconName: 'albums',
		path: 'favorites'
	}
]

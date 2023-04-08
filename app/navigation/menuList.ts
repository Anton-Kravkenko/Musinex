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
		iconName: 'book-open',
		path: 'Home'
	},
	
	{
		iconName: 'user',
		path: 'UserProfile'
	}
]

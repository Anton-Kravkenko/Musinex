import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import MenuItem from '../../navigation/menuItem'
import { menuItems } from '../../navigation/menuList'

const BottomMenu: FC<{ currentRoute: string | undefined }> = ({
	currentRoute
}) => {
	const { navigate } = useTypedNavigation()
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			style={{ paddingBottom: bottom + 5 }}
			className='flex-row bg-[#151515] h-[65px] pt-0 items-center pl-10 pr-10 w-full  justify-between'
		>
			{menuItems.map(item => (
				<MenuItem
					item={item}
					key={item.path}
					nav={navigate}
					currentRoute={currentRoute}
				/>
			))}
		</View>
	)
}

export default BottomMenu

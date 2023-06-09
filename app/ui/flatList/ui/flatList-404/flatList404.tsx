import { IFlatList404 } from '@/ui/flatList/ui/flatList-404/flatList404.types'
import Lottie from 'lottie-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import Title from '../../../title/title'

const FlatList404: FC<IFlatList404> = props => (
		<View className='w-full h-full'>
			<Lottie
				source={require('../../../../assets/90988-no-results.json')}
				style={{
					width: props.width,
					height: props.height,
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					alignSelf: 'center'
				}}
				autoSize={true}
				autoPlay={true}
				loop={false}
			/>
			<Title translate className='text-center'>
				No results
			</Title>
		</View>
	)

export default FlatList404

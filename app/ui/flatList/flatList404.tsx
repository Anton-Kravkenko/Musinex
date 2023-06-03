import Lottie from 'lottie-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import Title from '../title/title'

interface IFlatList404 {
	width: number
	height: number
}

const FlatList404: FC<IFlatList404> = props => {
	return (
		<View className='flex-1 items-center justify-center w-full h-full'>
			<Lottie
				source={require('../../assets/90988-no-results.json')}
				style={{
					width: props.width,
					height: props.height
				}}
				autoSize={true}
				autoPlay={true}
				loop={false}
			/>
			<Title translate>
				{'No results'}
			</Title>
		</View>
	)
}

export default FlatList404

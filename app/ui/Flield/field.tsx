import { getHexCode } from '@/utils/getColor'
import { Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'
import { useColorScheme } from 'nativewind'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextInput, View } from 'react-native'
import Title from '../title/title'
import { IField } from './types/Ifiled'

const Field = <T extends Record<string, any>>({
	placeholder,
	...props
}: IField<T>): JSX.Element | null => {
	let [fontsLoaded] = useFonts({
		Montserrat_700Bold
	})
	const { t } = useTranslation()
	const { colorScheme } = useColorScheme()
	if (!fontsLoaded) return null
	return (
		<Controller
			control={props.control}
			name={props.name}
			rules={props.rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						style={{
							borderWidth: error ? 1 : 0,
							borderColor: getHexCode('red'),
							backgroundColor: colorScheme === 'light' ? getHexCode('primaryGray') : getHexCode('lightBlack'),
						}}
						className={'w-full rounded-lg pb-4 pt-2.5 px-4 my-1.5'}
					>
						<TextInput
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur}
							keyboardAppearance='dark'
							keyboardType={'default'}
							renderToHardwareTextureAndroid={true}
							placeholderTextColor={getHexCode('white')}
							value={(value ? value : '').toString()}
							className='text-base text-white'
							style={{
								fontFamily: 'Montserrat_700Bold'
							}}
							placeholder={t(placeholder).toString()}
							{...props}
						/>
					</View>
					{error && (
						<Title color={'red'} size={16}>
							{error.message ? error.message : 'error!'}
						</Title>
					)}
				</>
			)}
		/>
	)
}

export default Field

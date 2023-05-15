import { IField } from '@/ui/Flield/types/Ifiled'
import { SearchBar } from '@rneui/themed'
import I18n from 'i18n-js'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

const USearchBar = <T extends Record<string, any>>
({
	 control,
	 rules,
	 name,
	 ...rest
 }: IField<T>): JSX.Element => {
	const { colorScheme } = useColorScheme()
	const { reset } = useForm()
	return <Controller render={({ field: { onChange, onBlur, value } }) => (
		<SearchBar
			lightTheme={colorScheme === 'light'}
			className='rounded-full'
			onCancel={() => reset()}
			round={true}
			placeholder={I18n.t('Type anything')}
			containerStyle={{
				backgroundColor: 'transparent',
				borderBottomWidth: 0,
				borderTopWidth: 0,
				width: '100%',
				padding: 0,
				margin: 0,
				paddingBottom: 5
			}}
			onChangeText={onChange}
			onBlur={onBlur}
			value={value}
			{...rest}
		/>
	)} name={name} control={control} />
}

export default USearchBar
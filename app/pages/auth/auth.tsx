import { useAction } from '@/hook/useAction'
import { useAuth } from '@/hook/useAuth'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { login } from '@/redux/auth/authAction'
import { IAuthFields } from '@/types/auth/authTypes'
import Button from '@/ui/button/button'
import Field from '@/ui/Flield/field'
import Layout from '@/ui/layout/layout'
import Title from '@/ui/title/title'
import I18n from 'i18n-js'
import Lottie from 'lottie-react-native'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

const Auth = () => {
const {user} = useAuth()
	const {register, login} = useAction()
	const {navigate} = useTypedNavigation()
	const [type, setType] = useState<'Login' | 'Register'>('Login')
	const {control, handleSubmit} = useForm<IAuthFields>({
	mode: 'onSubmit'
	})
	if (user) {
		navigate('Home')
	}
	
	const onSubmit: SubmitHandler<IAuthFields>  = ({password,email}) => type === "Login" ? login({password,email}) : register({password,email})
	return <Layout className='h-screen justify-center'>
		<View className='items-center'>
		
	<Lottie source={require('@/assets/auth.json')} style={{
		width: 200,
		height: 200
	}}  autoPlay loop />
		<View className='w-full'>
			<Title className='text-center mb-4' size={24} fontFamily={'Montserrat_900Black'}>{
				type === 'Login' ? I18n.t('Login') : I18n.t('Register')
			}</Title>
			<View className='w-5/6 mx-auto'>
			
			<Field  rules={{
				required: {
					value: true,
					message: 'Email is required'
				},
				pattern: {
					value: /\S+@\S+\.\S+/,
					message: 'Entered value does not match email format'
				},
				
			}} control={control} name={'email'} placeholder={I18n.t(
				'Email'
			)} />
			
			<Field rules={{
				required: {
					value: true,
					message: 'Password is required'
				},
				minLength: {
					value: 6,
					message: 'Password must have at least 8 characters'
				}
			}} control={control} secureTextEntry={true} name={'password'} placeholder={I18n.t(
				'Password'
			)} />
		<Button variant={'primary'}  onPress={handleSubmit(onSubmit)} size={'large'} className='mt-2' translate text={type} />
			<Title className='mt-4' size={16} onPress={
				() => setType(type === 'Login' ? 'Register' : 'Login')
			}
			>{type === 'Login' ? I18n.t(
				'Dont have an account?'
			) :
			I18n.t(
				'Already have an account?'
			)
			}</Title>
			</View>
			
		</View>
		</View>
	</Layout>
}

export default Auth
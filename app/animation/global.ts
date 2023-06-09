import { LinearGradient } from 'expo-linear-gradient'
import { Image, Pressable, View } from 'react-native'
import Animated, {
	SharedValue,
	WithSpringConfig,
	WithTimingConfig
} from 'react-native-reanimated'

export const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
export const AnimatedView = Animated.createAnimatedComponent(View)

export const AnimatedImage = Animated.createAnimatedComponent(Image)
export const AnimatedLinearGradient =
	Animated.createAnimatedComponent(LinearGradient)

export interface AnimationConfigType {
	userConfig?: WithSpringConfig | WithTimingConfig
}

export interface IsOpenType {
	isOpen: boolean | SharedValue<boolean>
}
export interface IsOpenSharedValueType {
	isOpen: SharedValue<boolean>
}

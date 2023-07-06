import TrackPlayer, { Capability } from 'react-native-track-player'

export async function setupPlayer() {
	let isSetup
	try {
		await TrackPlayer.getActiveTrack()
		isSetup = true
		return isSetup
	} catch {
		await TrackPlayer.setupPlayer({
			autoHandleInterruptions: true,
			maxCacheSize: 10,
			maxBuffer: 0
		})
		await TrackPlayer.updateOptions({
			android: {
				alwaysPauseOnInterruption: true
			},
			progressUpdateEventInterval: 0,
			capabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo,
				Capability.Stop
			],
			compactCapabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo
			]
		})

		isSetup = true
		return isSetup
	}
}

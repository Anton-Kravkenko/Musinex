import React, { useRef } from 'react'

import { Animated } from 'react-native'
import { useTypedRoute } from '../../hook/useTypedRoute'
import Layout from '../../ui/layout/layout'
import CatalogBackground from './ui/catalogBackground/catalogBackground'
import CatalogContent from './ui/catalogContent/catalogContent'
import CatalogHeader from './ui/catalogHeader/catalogHeader'

const Catalog = () => {
	const { params } = useTypedRoute<'catalog'>()
	const y = useRef(new Animated.Value(0)).current
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				title={params.headerText}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={params.headerImage} y={y} />
			<CatalogContent
				type={params.type}
				description={params.headerDescription}
				headerTitle={params.headerText}
				DataList={params.data}
				y={y}
			/>
		</Layout>
	)
}

export default Catalog

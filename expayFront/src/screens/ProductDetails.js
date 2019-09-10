import React from 'react'
import {Dimensions, Image, Text} from 'react-native'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks';
import {Container} from 'native-base'
import * as queries from '~/apollo/queries'

const Screen = ({ navigation }) => {
	const productId = navigation.getParam('id')
	const { loading, error, data } = useQuery(queries.GET_PRODUCT, {
		variables: {
			id: productId
		}
	});
	console.log(data)
	return (
		<Containers>
				{loading && <Text>{'Loading...'}</Text>}
                {error && <Text>{`Error! ${error.message}`}</Text>}
                {!loading && !error && (
					<>
						<Images
							source={{uri: `${data.product.img}`}}/>
						<DIV>
							<TextBold>Nom: </TextBold>
							<Text>{data.product.name}</Text>
						</DIV>
						<DIV>
							<TextBold>Prix: </TextBold>
							<Text>{data.product.price}</Text>
						</DIV>

						<Containers>
							<TextBold>Details: </TextBold>
							<Text>{data.product.details}</Text>
						</Containers>
					</>
				)}
		</Containers>
	)
}
Screen.navigationOptions = {
  title: 'Détails du produit'
}
export default Screen;

const Containers = styled.View`
	margin: 5px ;
	
`
const Images = styled(Image)`
width:  ${Dimensions.get('window').width };
	height: ${Dimensions.get('window').height/2};
`
const TextBold = styled(Text)`
font-weight: bold;
`
const DIV = styled(Text)`
display: flex;
`

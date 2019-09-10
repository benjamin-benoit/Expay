import React from 'react'
import {Dimensions, Image, ScrollView, Text} from 'react-native'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks';
import {Button} from 'native-base'
import * as queries from '~/apollo/queries'

const Screen = ({ navigation }) => {

	const productId = navigation.getParam('id');

	const { loading, error, data } = useQuery(queries.GET_PRODUCT, {
		variables: {
			id: productId
		}
	});
	return (
		<Containers>
				{loading && <Text>{'Loading...'}</Text>}
                {error && <Text>{`Error! ${error.message}`}</Text>}
                {!loading && !error && (
					<ScrollView>
						<Images
							source={{uri: `${data.product.img}`}}/>
						<DIV>
							<TextBold>Nom: </TextBold>
							<Text>{data.product.name}</Text>
						</DIV>
						<DIV>
							<TextBold>Prix: </TextBold>
							<Text>{data.product.price} €</Text>
						</DIV>

						<Containers>
							<TextBold>Details: </TextBold>
							<Text>{data.product.details}</Text>
						</Containers>
						<Buttons onPress={() => navigation.navigate('EditProduct', {id: productId})}>
							<TextBold>
								Editer le produit
							</TextBold>
						</Buttons>
					</ScrollView>
				)}
		</Containers>
	)
}
Screen.navigationOptions = {
  title: 'Détails du produit'
}
export default Screen;

const Containers = styled.View`
	margin: 2px ;
	
`
const Images = styled(Image)`
	width:  ${Dimensions.get('window').width};
	height: ${Dimensions.get('window').height / 3};
`
const TextBold = styled(Text)`
	display: flex;
	justify-content: center;
	font-weight: bold;
`
const DIV = styled(Text)`
	display: flex;
`
const Buttons = styled(Button)`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: aliceblue;
	width: 130px;
	height: auto;
`

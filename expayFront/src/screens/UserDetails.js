import React from 'react'
import {Dimensions, Image, FlatList, ScrollView, Text, TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks';
import {Button} from 'native-base'
import * as queries from '~/apollo/queries'
import {Card} from 'native-base';

const Screen = ({ navigation }) => {

	const userId = "c5e39643-ed5a-4e73-a853-2d282dbaab8d";

	const { loading, error, data } = useQuery(queries.GET_USER, {
		variables: {
			id: userId
		}
	});

    const {loading: load, error: err, data: data2} = useQuery(queries.GET_PRODUCT_BY_USER_ID, {
		variables: {
			id: "01c7961f-0a44-4470-9a1e-be3fe5e2706d"
		}
	});
    
	return (
		<Containers>
				{loading && <Text>{'Loading...'}</Text>}
                {error && <Text>{`Error! ${error.message}`}</Text>}
                {!loading && !error && (
					<ScrollView>
                        <Containers>
							<HeaderTitle>Prénom: </HeaderTitle>
							<TextContent>{data.user.firstName}</TextContent>
							<HeaderTitle>Nom: </HeaderTitle>
							<TextContent>{data.user.lastName}</TextContent>
							<HeaderTitle>Pays: </HeaderTitle>
							<TextContent>{data.user.country}</TextContent>
							<HeaderTitle>Numero de téléphone: </HeaderTitle>
							<TextContent>{data.user.phoneNumber}</TextContent>
						</Containers>
						<Buttons onPress={() => navigation.navigate('EditUser', {id: userId})}>
							<TextBold>
								Editer mon profil
							</TextBold>
						</Buttons>
							<HeaderTitle>Mes annonces: </HeaderTitle>

							{load && <Text>{'Loading...'}</Text>}
							{err && <Text>{`Error! ${err.message}`}</Text>}
							{!load && !err && (
							<FlatListcusto
								data={data2.productByUserID}
								numColumns={2}
								renderItem={({item: {id, name, price, category, img}}) => (
									<TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {id})}>
										<Card>
										<Images source={{uri: `${img}`}}/>
										<Text>Nom: {name}</Text>
										<Text>Prix: {price}</Text>
										<Text>Type: {category.name}</Text>
										</Card>
									</TouchableOpacity>

							)}
								keyExtractor={({id}) => id}
						/>
							)}
					</ScrollView>
				)}
		</Containers>
	)
}
Screen.navigationOptions = {
	title: `Mon Profil `
}
export default Screen;
  
const Container = styled.View`
    align-items: center;
    justify-content: center;
`
  
const HeaderTitle = styled(Text)`
padding: 10px;
background-color: #dedede;
justify-content: center;
font-weight: bold;
`
const TextContent = styled(Text)`
padding: 15px;
justify-content: center;
`
const TextBold = styled(Text)`
display: flex;
justify-content: center;
font-weight: bold;
`

const Containers = styled.View`
margin: 2px ;

`
const Buttons = styled(Button)`
	display: flex;
	flex-direction: column;
	align-items: center;
    background-color: aliceblue;
    padding: 10px;
	width: auto;
    height: auto;
    margin: auto;
    margin-bottom: 10px;
`
const FlatListcusto = styled(FlatList)`
  margin: 3px;
`

const Images = styled(Image)`
width:  ${Dimensions.get('window').width/2};
	height: ${Dimensions.get('window').height/6};
`

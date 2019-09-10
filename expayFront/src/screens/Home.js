import React, {useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '~/apollo/queries'
import Input from '~/components/Input'
import Separator from '~/components/Separator'
import {Card} from 'native-base';

const Screen = ({ navigation }) => {
  const [q, setQ] = useState('');
  const { loading, error, data } = useQuery(queries.GET_PRODUCTS, {});
  return (
    <>
    <Input
      value={q}
      onChangeText={v => setQ(v)}
      placeholder="Rechercher un bien..."
    />
    <Separator />
      <Container>
        {loading && <Text>{'Loading...'}</Text>}
        {error && <Text>{`Error! ${error.message}`}</Text>}
        {!loading && !error && (
            <FlatListcusto
                data={data.products}
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
      </Container>
    </>
  );
}
Screen.navigationOptions = {
  title: 'Liste des Biens'
}
export default Screen;

const Container = styled.View`
flex: 1;
`
const Images = styled(Image)`
width:  ${Dimensions.get('window').width/2};
	height: ${Dimensions.get('window').height/6};
`
const FlatListcusto = styled(FlatList)`
  margin: 3px;
`

import React, {useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '~/apollo/queries'
import Input from '~/components/Input'
import Separator from '~/components/Separator'
import {Card, Picker} from 'native-base';

const Screen = ({ navigation }) => {
  const [q, setQ] = useState('');
  // state picker
  const [valuePicker, onValueChange] = useState('');

  // const { loading, error, data } = useQuery(queries.GET_PRODUCTS, {});
  const {loading, error, data} = useQuery(queries.GET_PRODUCT_BY_CATEGORY, {
    variables: {
      idCategory: valuePicker
    }
  });
  return (
    <>
    <Input
        value={q}
        onChangeText={v => setQ(v)}
        placeholder="Rechercher un bien..."
    />
    <Separator />
      <Flex>
        <Texti> Category :</Texti>
        <Picker
            selectedValue={valuePicker}
            mode="dropdown"
            onValueChange={onValueChange.bind(this)}
        >
          <Picker.Item name="All" label="All" value=""/>
          <Picker.Item name="It" label="It" value="1"/>
          <Picker.Item name="Car" label="Car" value="2"/>
          <Picker.Item name="Games" label="Games" value="3"/>
          <Picker.Item name="Other" label="Other" value="4"/>
        </Picker>
      </Flex>
      <Container>
        {loading && <Text>{'Loading...'}</Text>}
        {error && <Text>{`Error! ${error.message}`}</Text>}
        {!loading && !error && (
            <>
              <FlatListcusto
                  data={data.productByCategory}
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
            </>
        )}
      </Container>
    </>
  );
}
Screen.navigationOptions = {
  title: 'Liste des Biens'
};
const Container = styled.View`
  flex: 1;
`
const Flex = styled.View`
  display: flex;

`
const Texti = styled(Text)`
  display: flex;
`
const Images = styled(Image)`
width:  ${Dimensions.get('window').width / 2};
	height: ${Dimensions.get('window').height / 6};
`
const FlatListcusto = styled(FlatList)`
  margin: 3px;
`

export default Screen;



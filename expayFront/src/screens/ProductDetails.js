import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks';
import * as queries from '~/apollo/queries'
import * as mutations from '~/apollo/mutations'
import Input from '~/components/Input'
import Separator from '~/components/Separator'
import { Formik } from 'formik';
import * as Yup from 'yup';

const Screen = ({ navigation }) => {
	const productId = navigation.getParam('id')
	const { loading, error, data } = useQuery(queries.GET_PRODUCT, {
		variables: {
			q: productId
		}
	});
	return (
		<Container>
				{loading && <Text>{'Loading...'}</Text>}
                {error && <Text>{`Error! ${error.message}`}</Text>}
                {!loading && !error && (
				<Text>{data.name}</Text>
				)}
		</Container>
	)
}
Screen.navigationOptions = {
  title: 'Détails du produit'
}
export default Screen;

const Container = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`

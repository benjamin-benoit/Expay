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
			id: productId
		}
	});
	const [editProduct, {
		loading: mutationLoading,
		error: mutationError,
		data: mutationData
	}] = useMutation(mutations.EDIT_PRODUCT);
	const onSubmit = async ({ name, price, userID, img, category }) => {
		await editProduct({
			variables: {
				id: productId,
				data: {
					name,
					price,
					userID,
					img,
					category
				}
			},
		});
		navigation.goBack()
	}
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Le nom du produit est requis'),
		price: Yup.string().required('Le prix est requis'),
		img: Yup.string().required('La photo est requise'),
		category: Yup.string().required('La catégorie est requise')
	})
	return (
		<Container>
			<Formik
				validateOnChange={false}
				validateOnBlur={false}
				enableReinitialize={true}
				initialValues={data.product}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ values, errors, handleChange, setFieldValue, handleSubmit }) => (
					<>
						<Input
							placeholder="Nom"
							value={values.name}
							error={errors.name}
							onChangeText={handleChange('name')}
						/>
						<Separator />
						<Input
							placeholder="Prix"
							value={values.price}
							error={errors.price}
							onChangeText={handleChange('price')}
						/>
						<Separator />
						<Input
							placeholder="img"
							value={values.img}
							error={errors.img}
							onChangeText={handleChange('img')}
						/>
						<Separator />
						<Input
							placeholder="category"
							value={values.category}
							error={errors.category}
							onChangeText={handleChange('category')}
						/>
						<Separator />
						<View style={{ height: 10 }} />
						<Button title={mutationLoading ? '...' : 'OK'} onPress={handleSubmit} disabled={mutationLoading} />
					</>
				)}
			</Formik>
		</Container>
	)
}
Screen.navigationOptions = {
  title: 'Ajouter un produit'
}
export default Screen;

const Container = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`

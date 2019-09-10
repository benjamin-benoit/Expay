import React from 'react'
import {Button, View} from 'react-native'
import styled from 'styled-components'
import {useMutation, useQuery} from '@apollo/react-hooks';
import * as queries from '~/apollo/queries'
import * as mutations from '~/apollo/mutations'
import Input from '~/components/Input'
import Separator from '~/components/Separator'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Picker} from "native-base";

const Screen = ({ navigation }) => {
	const userId = navigation.getParam('id')
	const { loading, error, data } = useQuery(queries.GET_USER, {
		variables: {
			id: userId
		}
	});
	console.log(data)

	const [editUser, {
		loading: mutationLoading,
		error: mutationError,
		data: mutationData
	}] = useMutation(mutations.EDIT_USER);
	const onSubmit = async ({ firstName, lastName, country, phoneNumber }) => {
		await editUser({
			variables: {
				id: userId,
				data: {
					firstName,
					lastName,
					country,
					phoneNumber
				}
			},
		});
		navigation.goBack()
	}
	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required('Le nom du produit est requis'),
		lastName: Yup.string().required('Le prix est requis'),
		country: Yup.string().required('La photo est requise'),
		phoneNumber: Yup.string().required('La catégorie est requise')
	})
	return (
		<Container>
			<Formik
				validateOnChange={false}
				validateOnBlur={false}
				enableReinitialize={true}
				initialValues={data.user}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ values, errors, handleChange, setFieldValue, handleSubmit }) => (
					<>

						<Input
							placeholder="Prénom"
							value={values.firstName}
							error={errors.firstName}
							onChangeText={handleChange('firstName')}
						/>
						<Separator />
						<Input
							placeholder="Nom"
							value={values.lastName}
							error={errors.lastName}
							onChangeText={handleChange('lastName')}
						/>
						<Separator />
						<Input
							placeholder="Pays"
							value={values.country}
							error={errors.country}
							onChangeText={handleChange('country')}
						/>
						<Separator />
						<Input
							placeholder="Numéro de téléphone"
							value={values.phoneNumber}
							error={errors.phoneNumber}
							onChangeText={handleChange('phoneNumber')}
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
	title: `Modifier le Produit `
}
export default Screen;

const Container = styled.View`
	align-items: center;
	justify-content: center;
`

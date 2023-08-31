import React from 'react'
import styled from 'styled-components'
import { useControlValue } from '../../Contexts/ControlContext'
import { InputRadio } from '../../Common/InputRadio'
import { Description } from '../../Common/Description'

export const Templates = () => {
	const { data, changeTemplate } = useControlValue()
	const templateTypes = [
		{
			label: 'Modelo 1',
			name: 'template1',
		},
		{
			label: 'Modelo 2',
			name: 'template2',
		},
	]

	return (
		<StyledForm>
			<Description>Escolha o modelo</Description>
			{templateTypes.map(templateType => (
				<InputRadio
					label={templateType.label}
					name={templateType.name}
					checked={data.template}
					onChange={changeTemplate}
					key={templateType.name}
				/>
			))}
		</StyledForm>
	)
}

const StyledForm = styled.form`
	animation: flipdown 0.2s ease both;
`
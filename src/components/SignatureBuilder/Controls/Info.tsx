import React from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { InputText } from '../../Common/InputText'
import { Accordion } from '../../Common/Accordion'
import { inputList } from '../../Common/InputList'
import { Description } from '../../Common/Description'

export const Info = () => {
	const { data, updateInfo } = useInfoValue()

	return (
		<StyledInfo>
			<Description>Insira suas informações</Description>
			{inputList.default.map(input => (
				<InputText
					label={input.label}
					name={input.name}
					value={data[input.name]}
					onBlur={updateInfo}
					key={input.name}
				/>
			))}
			<Accordion title="Informação de Contato">
				{inputList.contact.map(input => (
					<InputText
						label={input.label}
						name={input.name}
						value={data[input.name]}
						onBlur={updateInfo}
						key={input.name}
					/>
				))}
			</Accordion>
			<Accordion title="Social">
				{inputList.social.map(input => (
					<InputText
						label={input.label}
						name={input.name}
						value={data[input.name]}
						onBlur={updateInfo}
						key={input.name}
					/>
				))}
			</Accordion>
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	animation: flipdown 0.2s ease both;
`

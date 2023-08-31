import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return(
		<StyledHeader>
			<h1>Gerador de Assinatura BRy Tecnologia</h1>
			<p>Use o painel à esquerda para personalizar sua assinatura e clique no botão abaixo para copiar o HTML</p>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	margin-bottom: 8rem;
	text-align: center;
	font-size: 14px;
	h1 {
		font-size: 45px;
		margin: 1rem 0 0;
	}
`
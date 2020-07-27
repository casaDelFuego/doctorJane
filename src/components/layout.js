import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const MenuList = styled.ul`
list-style-type: none;
`

const MenuItem = styled.li`
text-decoration: none;
`


export default function Layout({ children }) {
	return (
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
			<h1>Evgenia Bobkova</h1>
			<MenuList>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/watercolours/">Watecolours</Link></li>
				<li><Link to="/graphics/">Graphics</Link></li>
				<li><Link to="/store/">Store</Link></li>
				<li><Link to="/contact/">Contact me</Link></li>
			</MenuList>
			{children}

		</div>
	)
}
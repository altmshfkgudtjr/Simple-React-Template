import React from 'react'
import { Helmet } from "react-helmet-async"
// components
import Home from 'containers/Home'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>APP-NAME</title>
		</Helmet>

		<Home />
	</>);
}

export default HomePage
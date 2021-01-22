import React from 'react'
// components
import Section from 'components/home/Section'
import Title from 'components/home/Title'
import Post from 'components/home/Post'
import Btn from 'components/home/Btn'

const Home = () => {
  return (
    <Section>
			<Title>Hello React</Title>
			<Post>This is simple <strong>React</strong> template!</Post>
			<Post>Create new your app using this template.</Post>
			<Post>If you want to check the refernece? Click this <a href="https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/README.md">README.md</a> file.</Post>
			<Btn />
		</Section>
  );
}

export default Home
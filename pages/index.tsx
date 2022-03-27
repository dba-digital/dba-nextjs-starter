import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LayoutDefault from "../components/layouts/LayoutDefault";
import Headline from "../components/elements/Headline/Headline";
import Text from "../components/elements/Text/Text";
import Container from "../components/templates/Container/Container";

const Home: NextPage = () => {
  return (
    <LayoutDefault title='Home' description='Description' keywords='Keyword1, Keyword2, Keyword3'>
        <Container className='my-40'>
            <Headline level={1} size='xl'>
                dba – NextJS Starter
            </Headline>
            <Text className='mt-6'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </Text>
        </Container>
    </LayoutDefault>
  )
}

export default Home
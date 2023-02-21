import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from '../components/Header';

export default props => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
                <title>Crowd Coin</title>
            </Head>
            <Header />
            {props.children}
        </Container>
    );
};
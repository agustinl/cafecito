import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from '@mantine/core';

type Props = {
	children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return <>
        <Header />
        <Container p={20} mih="calc(100vh - 160px)" size="lg">
            {children}
        </Container>
        <Footer />
    </>;
};

export default Layout;

import React from 'react';
import GlobalSyles from './styles/GlobalSyles';

import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <>
            <GlobalSyles />
            <Layout />
        </>
    )
}

export default App;
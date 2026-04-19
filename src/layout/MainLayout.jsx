import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../component/Shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
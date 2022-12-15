import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classes from './App.module.css';
import Sidebar from './components/Layout/Sidebar';
import SidebarToggle from './components/Layout/SidebarToggle';
import Main from './components/Layout/Main';
import Drawer from './components/UI/Drawer';
import Footer from './components/Layout/Footer';

function App() {
    const [innerWidth, setInnerWidth] = useState(window.visualViewport.width);
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const isMobile = innerWidth <= 1024;

    useEffect(() => {
        const resizeListener = () => {
            setInnerWidth(window.visualViewport.width);
        };
        window.addEventListener('resize', resizeListener);
    });

    useEffect(() => {
        return () => {
            localStorage.clear();
        };
    }, []);

    const closeToggleMenuHandler = () => {
        setIsToggleOpen(false);
        if (isMobile) {
            document
                .getElementById('drawer')
                .setAttribute('class', 'slide-out');
        }
    };
    const openToggleMenuHandler = () => {
        setIsToggleOpen(true);
    };

    const appClasses = !isMobile ? classes.app : classes['app-mobile'];

    return (
        <BrowserRouter>
            <div className={appClasses}>
                {!isMobile ? (
                    <Sidebar />
                ) : (
                    !isToggleOpen && (
                        <SidebarToggle onToggleClick={openToggleMenuHandler} />
                    )
                )}
                {isToggleOpen && (
                    <Drawer
                        onClose={closeToggleMenuHandler}
                        isToggleOpen={isToggleOpen}
                    />
                )}

                <Main isMobile={isMobile} />
            </div>
             {!isMobile && <Footer />}
        </BrowserRouter>
    );
}

export default App;

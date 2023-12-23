
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home, UseDeferredValueExample, UseIdExample, UseInsertionEffectExample, UseSyncExternalStoreExample, UseTransitionExample } from './components';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/use-id" element={<UseIdExample />}/>
                <Route path="/use-deferred" element={<UseDeferredValueExample />}/>
                <Route path="/use-transition" element={<UseTransitionExample />}/>
                <Route path="/use-sync" element={<UseSyncExternalStoreExample />}/>
                <Route path="/use-insertion-effect" element={<UseInsertionEffectExample />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
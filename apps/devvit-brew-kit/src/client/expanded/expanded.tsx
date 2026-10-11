import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ExpandedView } from './ExpandedView';
import '../index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ExpandedView />
    </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { InlineView } from './InlineView';
import '../index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <InlineView />
    </StrictMode>
);

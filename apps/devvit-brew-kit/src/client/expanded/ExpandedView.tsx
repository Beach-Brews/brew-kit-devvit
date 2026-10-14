/*!
 * Core React app entry.
 *
 * Author: u/Beach-Brews
 * License: BSD-3-Clause
 */

import { DesignLanguagePage } from './DesignLanguagePage';
import { Toaster } from '@brew-kit/devvit/client';

export function ExpandedView() {
    return (
        <div className="w-full h-screen overflow-auto">
            <div className="container max-w-screen-lg min-h-screen mx-auto flex flex-col justify-between relative z-0">
                <div className="px-4">
                    <DesignLanguagePage />
                </div>
            </div>
            <Toaster />
        </div>
    );
}

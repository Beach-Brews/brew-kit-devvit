/*!
 * Main inline view component.
 *
 * Author: u/Beach-Brews
 * License: BSD-3-Clause
 */

import { type MouseEvent, useCallback } from 'react';
import { requestExpandedMode } from '@devvit/web/client';

export function InlineView() {
    const launchExpanded = useCallback((e: MouseEvent) => {
        requestExpandedMode(e.nativeEvent as PointerEvent, 'expanded');
    }, []);

    return (
        <div className="w-full h-full overflow-none flex flex-col justify-center items-center">
            <div>
                <button className="brew-btn-primary" onClick={launchExpanded}>
                    Launch Brew-Kit Demo
                </button>
            </div>
        </div>
    );
}

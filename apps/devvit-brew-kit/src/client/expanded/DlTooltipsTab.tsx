/*!
 * The tooltips tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { DescriptionTooltip } from '@brew-kit/devvit/client';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const DlTooltipsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Tooltips</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
                <div>
                    Simple text description{' '}
                    <DescriptionTooltip text="Simple text" />
                </div>
                <div>
                    Custom icon{' '}
                    <DescriptionTooltip
                        text="Simple text"
                        Icon={ExclamationTriangleIcon}
                    />
                </div>
                <div>
                    Complex tooltip{' '}
                    <DescriptionTooltip>
                        You can have <strong>custom jsx</strong> within as well.
                        <div className="size-6 bg-brew-button-primary-background text-brew-button-primary-onbackground font-bold flex justify-center items-center">
                            DL
                        </div>
                    </DescriptionTooltip>
                </div>
            </div>
        </div>
    );
};

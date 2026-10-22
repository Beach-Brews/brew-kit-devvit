/*!
 * The icons tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { BannerMessage, SubDefaultIcon, toast } from '@brew-kit/devvit/client';
import type { ReactNode } from 'react';

export const DlIconItem = ({
    icon,
    name,
}: {
    icon: ReactNode;
    name: string;
}) => {
    const copyStyle = async () => {
        await navigator.clipboard.writeText(name);
        toast.success(`Copied to "${name}" to clipboard.`);
    };
    return (
        <div
            className="w-full border border-neutral-border rounded-lg cursor-pointer p-2 flex flex-col justify-between items-center"
            onClick={copyStyle}
        >
            <div>{icon}</div>
            <div>{name}</div>
        </div>
    );
};

export const DlIconsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Icons</h1>
            <BannerMessage type="plain">
                Click on icons to copy icon name.
            </BannerMessage>
            <h2>General</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 justify-between gap-4">
                <DlIconItem icon={<SubDefaultIcon />} name={'SubDefaultIcon'} />
            </div>
        </div>
    );
};

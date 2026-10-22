/*!
 * A simple alert/notice message box.
 *
 * Author: u/Beach-Brews
 * License: BSD-3-Clause
 */

import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { type ReactNode, type MouseEvent, useState, useCallback } from 'react';

export type BannerType = 'danger' | 'caution' | 'plain' | 'plain-inverted' | 'success' | 'brand';

export type BannerMessageProps = {
    type: BannerType;
    hideIcon?: boolean;
    dismissable?: boolean;
    onDismissed?: (event: MouseEvent) => boolean | undefined;
    children: ReactNode;
};

export const BannerMessage = ({
    type,
    hideIcon = false,
    dismissable = false,
    onDismissed,
    children,
}: BannerMessageProps) => {
    const [visible, setVisible] = useState<boolean>(true);

    const dismissAlert = useCallback(
        (e: MouseEvent) => {
            setVisible(false);
            onDismissed?.(e);
        },
        [onDismissed, setVisible],
    );

    if (!visible) return;

    const typeStyle = {
        danger: {
            style: 'bg-banner-error text-banner-error-text',
            icon: <ExclamationCircleIcon className="size-6" />,
        },
        caution: {
            style: 'bg-banner-caution text-banner-caution-text',
            icon: <ExclamationTriangleIcon className="size-6" />,
        },
        plain: {
            style: 'bg-banner-plain text-banner-plain-text border border-neutral-border',
            icon: <InformationCircleIcon className="size-6" />,
        },
        'plain-inverted': {
            style: 'bg-banner-plain-inverted text-banner-plain-inverted-text',
            icon: <InformationCircleIcon className="size-6" />,
        },
        success: {
            style: 'bg-banner-success text-banner-success-text',
            icon: <CheckCircleIcon className="size-6" />,
        },
        brand: {
            style: 'bg-banner-brand text-banner-brand-text',
            icon: <InformationCircleIcon className="size-6" />,
        },
    }[type];

    return (
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${typeStyle.style}`}>
            {!hideIcon && typeStyle.icon}
            <div className="flex-1">{children}</div>
            {dismissable && (
                <button className="group cursor-pointer" onClick={dismissAlert}>
                    <XMarkIcon className="size-6 [&_path]:group-hover:stroke-3" />
                </button>
            )}
        </div>
    );
};

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
    XMarkIcon
} from '@heroicons/react/24/outline';
import  { type ReactNode, type MouseEvent, useState, useCallback } from 'react';

export type AlertType = 'danger' | 'caution' | 'info' | 'success';

export type AlertMessageProps = {
    type: AlertType;
    hideIcon?: boolean;
    dismissable?: boolean;
    onDismissed?: (event: MouseEvent) => boolean | undefined;
    children: ReactNode;
};

export const AlertMessage = ({
    type,
    hideIcon = false,
    dismissable = false,
    onDismissed,
    children
}: AlertMessageProps) => {

    const [visible, setVisible] = useState<boolean>(true);

    const dismissAlert = useCallback((e: MouseEvent) => {
        setVisible(false);
        onDismissed?.(e);
    }, [onDismissed, setVisible]);

    if (!visible)
        return;

    const typeStyle = {
        'danger': {
            style: 'bg-danger-background text-danger-onbackground',
            icon: (<ExclamationCircleIcon className="size-6" />)
        },
        'caution': {
            style: 'bg-caution-background text-caution-onbackground',
            icon: (<ExclamationTriangleIcon className="size-6" />)
        },
        'info': {
            style: 'bg-primary-background text-primary-onbackground',
            icon: (<InformationCircleIcon className="size-6" />)
        },
        'success': {
            style: 'bg-success-background text-success-onbackground',
            icon: (<CheckCircleIcon className="size-6" />)
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

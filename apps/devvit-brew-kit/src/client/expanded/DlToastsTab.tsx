/*!
 * The toaster tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { toast } from '@brew-kit/devvit/client';

export const DlToastsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Toasts</h1>
            <h2>Bottom</h2>
            <button
                className="brew-btn-primary"
                onClick={() => toast.success('Action Complete!')}
            >
                Success
            </button>
            <button
                className="brew-btn-secondary"
                onClick={() => toast.plain('Started Processing.')}
            >
                Plain
            </button>
            <button
                className="brew-btn-secondary"
                onClick={() => toast.plainInverted('Started Processing.')}
            >
                Plain (Inverted)
            </button>
            <button
                className="brew-btn-secondary"
                onClick={() => toast.brand('Hello Reddit!')}
            >
                Brand
            </button>
            <button
                className="brew-btn-secondary"
                onClick={() =>
                    toast.caution(
                        'Caution about something with longer message.'
                    )
                }
            >
                Caution
            </button>
            <button
                className="brew-btn-danger"
                onClick={() =>
                    toast.danger('Failed to do the thing you wanted.')
                }
            >
                Danger
            </button>
        </div>
    );
};

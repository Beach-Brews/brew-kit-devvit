/*!
 * The buttons tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { TrashIcon } from '@heroicons/react/24/solid';

export const DlButtonsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Buttons</h1>
            <h2>Primary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-primary">Primary</button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-primary">
                        Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-primary brew-btn-lg">
                        Large
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-primary brew-btn-sm">
                        Small
                    </button>
                </div>
            </div>
            <h2>Strong</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-strong">Strong</button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-strong">
                        Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-strong brew-btn-lg">
                        Large
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-strong brew-btn-sm">
                        Small
                    </button>
                </div>
            </div>
            <h2>Secondary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-secondary">Secondary</button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-secondary">
                        Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-secondary brew-btn-lg">
                        Large
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-secondary brew-btn-sm">
                        Small
                    </button>
                </div>
            </div>
            <h2>Danger</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-danger">Danger</button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-danger">
                        Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-danger brew-btn-lg">
                        Large
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-danger brew-btn-sm">
                        <TrashIcon className="size-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

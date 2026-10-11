/*!
 * The buttons tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

export const DlButtonsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Buttons</h1>
            <h2>Primary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-primary">Primary Button</button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-primary">
                        Primary Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-primary brew-btn-lg">
                        Primary Button
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-primary brew-btn-sm">
                        Primary Button
                    </button>
                </div>
            </div>
            <h2>Secondary</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-between items-center">
                <div className="flex justify-center">
                    <button className="brew-btn-secondary">
                        Secondary Button
                    </button>
                </div>
                <div className="flex justify-center">
                    <button disabled={true} className="brew-btn-secondary">
                        Secondary Disabled
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-secondary brew-btn-lg">
                        Secondary Button
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="brew-btn-secondary brew-btn-sm">
                        Secondary Button
                    </button>
                </div>
            </div>
        </div>
    );
};

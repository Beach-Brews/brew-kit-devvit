/*!
 * The Design Language, outlining all useful design elements, such as colors,
 * forms, buttons, and notifications.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { type CSSProperties } from 'react';
import { TabGroup } from '@brew-kit/devvit/client';
import { DlColorTab } from './DlColorTab';
import { DlBannersTab } from './DlBannersTab';
import { DlToastsTab } from './DlToastsTab';
import { DlTypographyTab } from './DlTypographyTab';

export const TempTab = () => {
    return <div>Placeholder for the time being.</div>;
};

export const DesignLanguagePage = () => {
    //const [theme, setTheme] = useState<string>('limegreen');
    const theme = 'limegreen';
    return (
        <div
            className="flex flex-col gap-4 p-4"
            style={
                {
                    '--brew-primary-border': `var(--reddit-${theme})`,
                    '--brew-primary-border-hovered': `var(--reddit-${theme}-dark)`,
                    '--brew-primary-content': `var(--reddit-${theme})`,
                    '--brew-button-primary-background': `var(--reddit-${theme})`,
                    '--brew-button-primary-background-hovered': `var(--reddit-${theme}-secondary)`,
                    '--color-brew-primary-border': `var(--reddit-${theme})`,
                    '--color-brew-primary-border-hovered': `var(--reddit-${theme}-dark)`,
                    '--color-brew-primary-content': `var(--reddit-${theme})`,
                    '--color-brew-button-primary-background': `var(--reddit-${theme})`,
                    '--color-brew-button-primary-background-hovered': `var(--reddit-${theme}-secondary)`,
                } as CSSProperties
            }
        >
            {/*
            <div className="flex justify-between">
                <select
                    className="bg-brew-button-primary-background text-brew-button-primary-onbackground font-bold rounded-md p-2"
                    value={theme}
                    onChange={(e) => setTheme(e.target?.value)}
                >
                    <option
                        value="orangered"
                        className="text-global-black font-bold bg-reddit-orangered"
                    >
                        Orange Red
                    </option>
                    <option
                        value="guavapink"
                        className="text-global-black font-bold bg-reddit-guavapink"
                    >
                        Guava Pink
                    </option>
                    <option
                        value="bananayellow"
                        className="text-global-black font-bold bg-reddit-bananayellow"
                    >
                        Banana Yellow
                    </option>
                    <option
                        value="limegreen"
                        className="text-global-black font-bold bg-reddit-limegreen"
                    >
                        Lime Green
                    </option>
                    <option
                        value="juniperblue"
                        className="text-global-black font-bold bg-reddit-juniperblue"
                    >
                        Juniper Blue
                    </option>
                </select>
            </div>
            */}
            <TabGroup
                tabs={{
                    'Colors': <DlColorTab />,
                    'Typography': <DlTypographyTab />,
                    //'Buttons': <TempTab />,
                    //'Forms': <TempTab />,
                    //'Tables': <TempTab />,
                    //'Tabs': <TempTab />,
                    //'Tooltips': <TempTab />,
                    //'Icons': <TempTab />,
                    'Banners': <DlBannersTab />,
                    'Toasts': <DlToastsTab />,
                    //'Modals': <TempTab />,
                    //'Page': <TempTab />,*/
                }}
            />
        </div>
    );
};

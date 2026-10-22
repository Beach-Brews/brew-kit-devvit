/*!
 * The color tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import type { CSSProperties, MouseEvent } from 'react';
import { BannerMessage, toast } from '@brew-kit/devvit/client';

export const DlColorItem = ({ color }: { color: string }) => {
    const value =
        window
            .getComputedStyle(document.documentElement)
            ?.getPropertyValue(color)
            .trim() ?? color.substring(2);
    const copyStyle = async (e: MouseEvent<HTMLDivElement>) => {
        const copyValue = e.ctrlKey ? value : color.substring(2);
        try {
            await navigator.clipboard.writeText(copyValue);
            toast.success(`Copied to "${copyValue}" to clipboard.`);
        } catch (e) {
            toast.danger(`Could not add "${copyValue}" to clipboard.`);
        }
    };
    return (
        <div
            className="w-full border border-neutral-border rounded-lg cursor-pointer"
            onClick={copyStyle}
        >
            <div
                style={
                    { '--dl-color-item': `var(${color})` } as CSSProperties
                }
                className={`w-full h-6 rounded-t-lg bg-(--dl-color-item)`}
            ></div>
            <div className="flex flex-col gap-2 p-2 justify-between">
                <span>{color.substring(2)}</span>
                <span className="text-neutral-content-weak">{value}</span>
            </div>
        </div>
    );
};

export const DlColorGrid = ({ colors }: { colors: string[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 justify-between gap-4">
            {colors.map((c,i) => <DlColorItem color={c} key={i} />)}
        </div>
    );
};

export const DlColorScale = ({ prefix }: { prefix: string }) => {
    const colors = [...window.getComputedStyle(document.documentElement)]
        .filter(s => s.indexOf('--' + prefix) == 0)
        .sort((a, b) => parseInt(a.substring(a.lastIndexOf('-')+1)) - parseInt(b.substring(b.lastIndexOf('-')+1)));
    return (
        <div className="flex flex-row md:flex-col gap-2 md:gap-0">
            <div className="flex flex-col w-25 md:flex-row md:w-full border-1 border-neutral-border rounded-lg relative">
                {colors.map((c,i) => {
                    const value =
                        window
                            .getComputedStyle(document.documentElement)
                            ?.getPropertyValue(c)
                            .trim() ?? c.substring(2);
                    const copyStyle = async (e: MouseEvent<HTMLDivElement>) => {
                        const copyValue = e.ctrlKey ? value : c.substring(2);
                        try {
                            await navigator.clipboard.writeText(copyValue);
                            toast.success(`Copied to "${copyValue}" to clipboard.`);
                        } catch (e) {
                            toast.danger(`Could not add "${copyValue}" to clipboard.`);
                        }
                    };
                    return (
                        <div
                            onClick={copyStyle}
                            key={i}
                            className={`w-full h-6 bg-(--dl-color-item) cursor-pointer hover:ring hover:z-100 hover:ring-white ${i == 0 ? 'rounded-t-lg md:rounded-tr-none md:rounded-l-lg' : (i == colors.length-1 ? 'rounded-b-lg md:rounded-bl-none md:rounded-r-lg' : '')}`}
                            title={c.substring(2) + ' - ' + value}
                            style={
                                {'--dl-color-item': `var(${c})`} as CSSProperties
                            }
                        >
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-col md:flex-row">
                {colors.map((c,i) => <span className="w-full text-center" key={i}>{c.substring(c.lastIndexOf('-')+1)}</span>)}
            </div>
        </div>
    );
};

const scaleColorsMap = {
    "CoolGray": "coolgray",
    "PureGray": "puregray",
    "OrangeRed": "orangered",
    "Red": "red",
    "SakuraPink": "sakurapink",
    "BerryPurple": "berrypurple",
    "Periwinkle": "periwinkle",
    "AlienBlue": "alienblue",
    "LightBlue": "lightblue",
    "MintGreen": "mintgreen",
    "KiwiGreen": "kiwigreen",
    "Lime": "lime",
    "Yellow": "yellow-",
    "YellowOrange": "yelloworange",
    "Brown": "brown"
};

const gridColorMap = {
    'Brand': [
        '--brand-orangered',
        '--brand-orangered-secondary',
        '--brand-orangered-light',
        '--brand-orangered-dark',
        '--brand-guavapink',
        '--brand-guavapink-secondary',
        '--brand-guavapink-light',
        '--brand-guavapink-dark',
        '--brand-bananayellow',
        '--brand-bananayellow-secondary',
        '--brand-bananayellow-light',
        '--brand-bananayellow-dark',
        '--brand-limegreen',
        '--brand-limegreen-secondary',
        '--brand-limegreen-light',
        '--brand-limegreen-dark',
        '--brand-juniperblue',
        '--brand-juniperblue-secondary',
        '--brand-juniperblue-light',
        '--brand-juniperblue-dark',
    ],
    'Globals': [
        '--global-black',
        '--global-white',
        '--global-black-white',
        '--global-white-black',
        '--global-admin',
        '--global-admin-content',
        '--global-alienblue',
        '--global-brand-orangered',
        '--global-darkblue',
        '--global-focus',
        '--global-gold',
        '--global-incognito',
        '--global-moderator',
        '--global-moderator-content',
        '--global-nsfw',
        '--global-nsfw-content',
        '--global-offline',
        '--global-online',
        '--global-orangered',
        '--global-stars',
    ],
    'Backgrounds': [
        '--neutral-background',
        '--neutral-background-canvas',
        '--neutral-background-container',
        '--neutral-background-container-hover',
        '--neutral-background-container-strong',
        '--neutral-background-container-strong-hover',
        '--neutral-background-gilded',
        '--neutral-background-gilded-hover',
        '--neutral-background-highlighted',
        '--neutral-background-highlighted-strong',
        '--neutral-background-hover',
        '--neutral-background-medium',
        '--neutral-background-pinned',
        '--neutral-background-selected',
        '--neutral-background-strong',
        '--neutral-background-strong-hover',
        '--neutral-background-weak',
        '--neutral-background-weak-hover',
    ],
    'Border': [
        '--neutral-border',
        '--neutral-border-divider',
        '--neutral-border-medium',
        '--neutral-border-strong',
        '--neutral-border-weak',
    ],
    'Content': [
        '--neutral-content',
        '--neutral-content-disabled',
        '--neutral-content-strong',
        '--neutral-content-weak',
    ],
    'Inverted': [
        '--inverted-interactive-background-disabled',
        '--inverted-interactive-content-disabled',
        '--inverted-interactive-pressed',
        '--inverted-neutral-background',
        '--inverted-neutral-background-hover',
        '--inverted-neutral-border',
        '--inverted-neutral-content',
        '--inverted-neutral-content-strong',
        '--inverted-secondary-background',
        '--inverted-secondary-background-hover',
        '--inverted-secondary-background-selected',
        '--inverted-secondary-onBackground',
        '--inverted-secondary-plain',
        '--inverted-secondary-plain-hover',
    ],
    'Primary': [
        '--primary',
        '--primary-background',
        '--primary-background-highlighted',
        '--primary-background-hover',
        '--primary-background-selected',
        '--primary-border',
        '--primary-border-hover',
        '--primary-hover',
        '--primary-onBackground',
        '--primary-onBackground-selected',
        '--primary-plain',
        '--primary-plain-hover',
        '--primary-plain-selected',
        '--primary-plain-visited',
        '--primary-switchBackground',
        '--primary-switchBackground-hover',
        '--primary-switchBackground-selected',
        '--primary-switchBackground-selected-hover',
        '--primary-visited',
        '--primarynext-background',
        '--primarynext-background-hover',
        '--primarynext-border',
        '--primarynext-border-hover',
        '--primarynext-onBackground',
        '--primarynext-plain',
        '--primarynext-plain-hover',
        '--primarynext-plain-selected',
        '--primarynext-plain-visited',
    ],
    'Secondary': [
        '--secondary',
        '--secondary-background',
        '--secondary-background-hover',
        '--secondary-background-selected',
        '--secondary-hover',
        '--secondary-onBackground',
        '--secondary-plain',
        '--secondary-plain-hover',
        '--secondary-plain-weak',
        '--secondary-weak',
    ],
    'Media': [
        '--media-background',
        '--media-background-hover',
        '--media-background-selected',
        '--media-border-selected',
        '--media-border-weak',
        '--media-onBackground',
        '--media-onBackground-disabled',
        '--media-onBackground-weak',
    ],
    'Danger': [
        '--danger-background',
        '--danger-background-disabled',
        '--danger-background-highlighted',
        '--danger-background-hover',
        '--danger-background-weaker',
        '--danger-content',
        '--danger-content-default',
        '--danger-content-hover',
        '--danger-onBackground',
        '--danger-plain',
        '--danger-plain-hover',
    ],
    'Success': [
        '--success-background',
        '--success-background-highlighted',
        '--success-background-hover',
        '--success-content',
        '--success-hover',
        '--success-onBackground',
        '--success-plain',
        '--success-plain-hover',
    ],
    'Caution': [
        '--alert-caution',
        '--caution-background',
        '--caution-background-highlighted',
        '--caution-background-hover',
        '--caution-onBackground',
        '--caution-plain',
        '--caution-plain-hover',
        '--warning-background',
        '--warning-background-hover',
        '--warning-content',
        '--warning-content-hover',
        '--warning-onBackground',
    ],
    'Banners': [
        '--banner-plain',
        '--banner-plain-inverted',
        '--banner-error',
        '--banner-caution',
        '--banner-success',
        '--banner-brand',
        '--banner-plain-text',
        '--banner-plain-inverted-text',
        '--banner-error-text',
        '--banner-caution-text',
        '--banner-caution-hover',
        '--banner-success-text',
        '--banner-brand-text',
    ],
    'Utility': [
        '--brand-background',
        '--brand-background-hover',
        '--brand-onBackground',
        '--scrim',
        '--scrim-background',
        '--scrim-background-strong',
        '--scrim-gradient',
        '--scrim-strong',
        '--interactive-background-disabled',
        '--interactive-content-disabled',
        '--interactive-focused',
        '--interactive-pressed',
        '--a-default',
        '--a-hover',
        '--a-visited',
        '--ui-modalbackground',
    ],
    'Upvote': [
        '--upvote-background',
        '--upvote-background-disabled',
        '--upvote-background-hover',
        '--upvote-content',
        '--upvote-content-weak',
        '--upvote-disabled',
        '--upvote-onBackground',
        '--upvote-onStrongScrim',
        '--upvote-onStrongScrim-disabled',
        '--upvote-onStrongScrim-weaker',
        '--upvote-plain',
        '--upvote-plain-disabled',
        '--upvote-plain-weaker',
    ],
    'Downvote': [
        '--downvote-background',
        '--downvote-background-disabled',
        '--downvote-background-hover',
        '--downvote-content',
        '--downvote-content-weak',
        '--downvote-disabled',
        '--downvote-onBackground',
        '--downvote-onStrongScrim',
        '--downvote-onStrongScrim-disabled',
        '--downvote-onStrongScrim-weaker',
        '--downvote-plain',
        '--downvote-plain-disabled',
        '--downvote-plain-weaker',
    ],
    'Tags': [
        '--tags-admin-background',
        '--tags-admin-content',
        '--tags-admin-content-weaker',
        '--tags-app-background',
        '--tags-app-content',
        '--tags-app-content-weaker',
        '--tags-author-background',
        '--tags-author-content',
        '--tags-author-content-weaker',
        '--tags-author-media-content-weaker',
        '--tags-brand-background',
        '--tags-brand-content',
        '--tags-brand-content-weaker',
        '--tags-brand-media-content-weaker',
        '--tags-caution-background',
        '--tags-caution-content',
        '--tags-caution-content-weaker',
        '--tags-caution-media-content-weaker',
        '--tags-danger-background',
        '--tags-danger-content',
        '--tags-danger-content-weaker',
        '--tags-danger-media-content-weaker',
        '--tags-moderator-background',
        '--tags-moderator-content',
        '--tags-moderator-content-weaker',
        '--tags-moderator-media-content-weaker',
        '--tags-neutral-background',
        '--tags-neutral-content',
        '--tags-neutral-content-weaker',
        '--tags-nsfw-background',
        '--tags-nsfw-content',
        '--tags-nsfw-content-weaker',
        '--tags-nsfw-media-content-weaker',
        '--tags-success-background',
        '--tags-success-content',
        '--tags-success-content-weaker',
        '--tags-success-media-content-weaker',
        '--tags-verified-background',
        '--tags-verified-content',
        '--tags-verified-content-weaker',
    ],
    'Input': [
        '--input-secondary',
        '--input-secondary-hover',
        '--input-border',
        '--input-bordered',
        '--input-bordered-hover',
        '--input-secondary-text',
        '--input-bordered-text',
        '--input-helper-text',
        '--input-pressed',
        '--input-radio',
        '--input-radio-hover',
        '--input-search-yellow-gradient',
        '--label-default',
    ],
    'Switch': [
        '--switch-input-background-pressed-scrim',
        '--switch-input-background-handle',
        '--switch-input-background-handle-disabled',
        '--switch-input-background-default',
        '--switch-input-background-default-hover',
        '--switch-input-background-default-disabled',
        '--switch-input-background-checked',
        '--switch-input-background-checked-hover',
        '--switch-input-background-checked-disabled',
    ],
    'Tooltip': [
        '--tooltip-bg-neutral',
        '--tooltip-text-neutral',
        '--tooltip-bg-inverted',
        '--tooltip-text-inverted',
        '--tooltip-bg-primary',
        '--tooltip-text-primary',
    ],
};

export const DlColorTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Colors</h1>
            <BannerMessage type="plain">
                Click color to copy color name. Ctrl + click to copy HEX value.
            </BannerMessage>
            {Object.entries(scaleColorsMap).map(([t,c], i) => {
                return (
                    <>
                        <h2 key={i}>{t}</h2>
                        <DlColorScale prefix={c} />
                    </>
                );
            })}
            {Object.entries(gridColorMap).map(([t,c], i) => {
                return (
                    <>
                        <h2 key={i}>{t}</h2>
                        <DlColorGrid colors={c} />
                    </>
                );
            })}
        </div>
    );
};

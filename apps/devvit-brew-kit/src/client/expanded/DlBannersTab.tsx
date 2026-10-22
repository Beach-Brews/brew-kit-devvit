/*!
 * The banners tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { BannerMessage } from '@brew-kit/devvit/client';

export const DlBannersTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Banners</h1>
            <h2>Success</h2>
            <BannerMessage type="success">
                This is a test success message.
            </BannerMessage>
            <BannerMessage type="success" dismissable={true}>
                This is a dismissable success message.
            </BannerMessage>
            <BannerMessage type="success" hideIcon={true}>
                This is a test success message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
            <h2>Plain</h2>
            <BannerMessage type="plain">
                This is a test plain message.
            </BannerMessage>
            <BannerMessage type="plain" dismissable={true}>
                This is a dismissable plain message.
            </BannerMessage>
            <BannerMessage type="plain" hideIcon={true}>
                This is a test plain message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
            <h2>Plain (Inverted)</h2>
            <BannerMessage type="plain-inverted">
                This is a test plain message.
            </BannerMessage>
            <BannerMessage type="plain-inverted" dismissable={true}>
                This is a dismissable plain message.
            </BannerMessage>
            <BannerMessage type="plain-inverted" hideIcon={true}>
                This is a test plain message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
            <h2>Brand</h2>
            <BannerMessage type="brand">
                This is a test brand message.
            </BannerMessage>
            <BannerMessage type="brand" dismissable={true}>
                This is a dismissable brand message.
            </BannerMessage>
            <BannerMessage type="brand" hideIcon={true}>
                This is a test brand message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
            <h2>Caution</h2>
            <BannerMessage type="caution">
                This is a test caution message.
            </BannerMessage>
            <BannerMessage type="caution" dismissable={true}>
                This is a dismissable caution message.
            </BannerMessage>
            <BannerMessage type="caution" hideIcon={true}>
                This is a test caution message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
            <h2>Danger</h2>
            <BannerMessage type="danger">
                This is a test danger message.
            </BannerMessage>
            <BannerMessage type="danger" dismissable={true}>
                This is a dismissable danger message.
            </BannerMessage>
            <BannerMessage type="danger" hideIcon={true}>
                This is a test danger message with no icon. Showing{' '}
                <strong>bold text</strong> as an example. Any content can be
                added in an banner message.
            </BannerMessage>
        </div>
    );
};

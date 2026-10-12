/*!
 * The alerts tab for the Design Language.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { AlertMessage } from '@brew-kit/devvit/client';

export const DlAlertsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2>Success</h2>
            <AlertMessage type='success'>
                This is a test success message.
            </AlertMessage>
            <AlertMessage type='success' dismissable={true}>
                This is a dismissable success message.
            </AlertMessage>
            <AlertMessage type='success' hideIcon={true}>
                This is a test success message with no icon. Showing <strong>bold text</strong> as an example. Any content can be
                added in an alert message.
            </AlertMessage>
            <h2>Info</h2>
            <AlertMessage type='info'>
                This is a test info message.
            </AlertMessage>
            <AlertMessage type='info' dismissable={true}>
                This is a dismissable info message.
            </AlertMessage>
            <AlertMessage type='info' hideIcon={true}>
                This is a test info message with no icon. Showing <strong>bold text</strong> as an example. Any content can be
                added in an alert message.
            </AlertMessage>
            <h2>Caution</h2>
            <AlertMessage type='caution'>
                This is a test caution message.
            </AlertMessage>
            <AlertMessage type='caution' dismissable={true}>
                This is a dismissable caution message.
            </AlertMessage>
            <AlertMessage type='caution' hideIcon={true}>
                This is a test caution message with no icon. Showing <strong>bold text</strong> as an example. Any content can be
                added in an alert message.
            </AlertMessage>
            <h2>Danger</h2>
            <AlertMessage type='danger'>
                This is a test danger message.
            </AlertMessage>
            <AlertMessage type='danger' dismissable={true}>
                This is a dismissable danger message.
            </AlertMessage>
            <AlertMessage type='danger' hideIcon={true}>
                This is a test danger message with no icon. Showing <strong>bold text</strong> as an example. Any content can be
                added in an alert message.
            </AlertMessage>
        </div>
    );
};

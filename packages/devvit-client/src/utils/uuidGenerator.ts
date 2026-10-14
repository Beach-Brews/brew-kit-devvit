/*!
 * Helper for generating unique IDs.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

export const genUid = () => {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 7);
};

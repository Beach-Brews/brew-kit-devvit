/*!
 * Some custom icons.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

export const BulletIcon = ({ fill }: { fill: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-slot="icon"
            className="size-5"
        >
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle
                cx="12"
                cy="12"
                r="6"
                className={fill ? 'text-current' : 'hidden group-hover:block'}
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
};

export const CheckboxIcon = ({ fill }: { fill: boolean }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-slot="icon"
            className="size-5"
        >
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect
                x="6"
                y="6"
                width="12"
                height="12"
                rx="2"
                ry="2"
                className={fill ? 'text-current' : 'hidden group-hover:block'}
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
};

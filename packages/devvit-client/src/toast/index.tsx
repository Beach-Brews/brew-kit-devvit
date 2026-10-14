/*!
 * Basic toasters styled for Reddit. Very basic implementation, with minimal extensibility.
 *
 * Author:  u/Beach-Brews
 * License: BSD-3-Clause
 */

import { useSyncExternalStore } from 'react';
import { type AlertType, AlertMessage } from '../components';
import { genUid } from '../utils/uuidGenerator';

export type Toast = {
    id: string;
    type: AlertType;
    message: string;
};

export type ToastOptions = Partial<Omit<Toast, 'message' | 'type'>> & { duration?: number | undefined };

const MAX_TOASTS = 3;
const DEFAULT_DURATION = 4000;

let toasts: readonly Toast[] = [];
const listeners = new Set<() => void>();
const timers = new Map<string, ReturnType<typeof setTimeout>>();

const setToasts = (next: readonly Toast[]) => {
    toasts = next;
    listeners.forEach((listener) => listener());
};

const subscribeToasts = (listener: () => void) => {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
};

const getToasts = () => toasts;

const dismissToast = (id: string) => {
    clearTimeout(timers.get(id));
    timers.delete(id);
    const filteredToasts = toasts.filter((t) => t.id !== id);
    if (toasts.length == filteredToasts.length) return false;
    setToasts(filteredToasts);
    return true;
};

const show = (message: string, type: AlertType, options: ToastOptions = {}): string => {
    const id = options.id ?? `tst_${genUid()}`;
    const item: Toast = { id, message, type: type ?? 'info' };

    const others = toasts.filter((t) => t.id !== id);
    // Drop the oldest when over the limit
    others.slice(0, Math.max(0, others.length - (MAX_TOASTS - 1))).forEach((t) => dismissToast(t.id));
    setToasts([...toasts.filter((t) => t.id !== id), item].slice(-MAX_TOASTS));

    clearTimeout(timers.get(id));
    const duration = options.duration ?? DEFAULT_DURATION;
    if (duration > 0)
        timers.set(
            id,
            setTimeout(() => dismissToast(id), duration),
        );
    return id;
};

export const toast = {
    dismiss: dismissToast,
    success: (message: string, options: ToastOptions = {}) => show(message, 'success', options),
    info: (message: string, options: ToastOptions = {}) => show(message, 'info', options),
    caution: (message: string, options: ToastOptions = {}) => show(message, 'caution', options),
    danger: (message: string, options: ToastOptions = {}) => show(message, 'danger', options),
};

export type ToasterProps = {
    position?: 'nw' | 'n' | 'ne' | 'sw' | 's' | 'se';
};

export const Toaster = ({ position = 's' }: ToasterProps) => {
    const toasts = useSyncExternalStore(subscribeToasts, getToasts, getToasts);
    const className = {
        "nw": "top-4 items-start",
        "n": "top-4 items-center",
        "ne": "top-4 items-end",
        "sw": "bottom-4 items-start flex-col-reverse",
        "s": "bottom-4 items-center flex-col-reverse",
        "se": "bottom-4 items-end flex-col-reverse",
    }[position];
    return (
        <section
            aria-label="Notifications"
            className={`pointer-events-none fixed inset-x-0 z-50 flex flex-col items-center gap-2 px-4 ${className}`}
        >
            {toasts.map((t) => (
                <div
                    key={t.id}
                    role={t.type === 'danger' ? 'alert' : 'status'}
                    className="pointer-events-auto w-full max-w-md shadow-lg rounded-full"
                >
                    <AlertMessage type={t.type} dismissable onDismissed={() => dismissToast(t.id)}>
                        {t.message}
                    </AlertMessage>
                </div>
            ))}
        </section>
    );
};

import type { ComponentProps, ElementType, ReactNode } from 'react';

// export type ButtonKind = 'primary' | 'secondary';
/*
    primary?: boolean;
     secondary?: boolean;
*/

// export enum ButtonKind {
//     PRIMARY = 'primary',
//     SECONDARY = 'secondary',
// }
export const buttonKind = {
    primary: 'primary',
    secondary: 'secondary',
};

type ButtonOwnProps<E> = {
    children: ReactNode;
    // kind?: ButtonKind;
    kind?: keyof typeof buttonKind;
    styles?: string;
    as?: E;
    classNames?: string;
    onClick: () => void;
    specialPrimaryMethod?: () => void;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof ButtonOwnProps<E>>;

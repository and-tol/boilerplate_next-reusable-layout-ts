import React from 'react';
import clsx from 'clsx';
import type { ReactElement, MouseEvent, ElementType } from 'react';

import type { ButtonProps} from './Button.props';
import {  buttonKind } from './Button.props';

import styles from './Button.module.scss';

const defaultElement = 'button';

export const Button = <E extends ElementType = typeof defaultElement>({
  children,
  kind,
  as,
  specialPrimaryMethod,
  onClick,
  classNames = '',
  ...otherProps
}: ButtonProps<E>): ReactElement => {
  const classes = clsx({ kind, styles, classNames });
  const TagName = as ?? defaultElement;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (kind === buttonKind.primary) {
      if (specialPrimaryMethod) {
        specialPrimaryMethod();
      }
    } else {
      onClick?.();
    }
  };

  return (
    <>
      <TagName
        onClick={handleClick}
        className={classes}
        data-testid={TagName}
        {...otherProps}
      >
        {children}
      </TagName>
    </>
  );
};

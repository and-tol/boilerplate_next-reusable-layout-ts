import React from 'react';
import type { FC, ReactElement } from 'react';

import { TemplateNameProps } from './TemplateName.props';

import styles from './TemplateName.module.scss';

export const TemplateName: FC<TemplateNameProps> = ({}): ReactElement => {
  return (
    <>
      <div className={styles.templateName} data-testid="TemplateName">
        TemplateName Component
      </div>
    </>
  );
};

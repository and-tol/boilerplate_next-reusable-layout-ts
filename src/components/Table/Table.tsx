import React from 'react';
import type { FC, ReactElement } from 'react';

import { TableProps } from './Table.props';

import styles from './Table.module.scss';

export const Table: FC<TableProps> = ({ }): ReactElement => (
  <div className={styles.table} data-testid="Table">
    Table Component
  </div>
);

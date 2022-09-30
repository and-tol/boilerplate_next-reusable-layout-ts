import React, { FC } from 'react';
import styles from './Block.module.scss';

interface BlockProps {}

const Block: FC<BlockProps> = () => (
  <div className={styles.Block} data-testid="Block">
    Block Component
  </div>
);

export default Block;

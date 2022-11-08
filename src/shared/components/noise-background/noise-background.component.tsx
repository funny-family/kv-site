import type { FC } from 'react';
import styles from './noise-background.module.scss';
import { normalizeClassName } from '@/shared/utils/normalize-class-name';

export type NoiseBackgroundAttrs = JSX.IntrinsicElements['div'];

export type OmittedNoiseBackgroundAttrs = Omit<NoiseBackgroundAttrs, 'ref' | 'children'>;

export interface NoiseBackgroundProps {
  //
}

export type NoiseBackgroundAttrsAndProps =
  OmittedNoiseBackgroundAttrs & NoiseBackgroundProps;

export const NoiseBackground: FC<NoiseBackgroundAttrsAndProps> = ({
  ...attrs
}) => {
  const className = normalizeClassName(attrs.className, styles.noiseBackground);

  return (
    <div {...attrs} className={className} />
  );
};

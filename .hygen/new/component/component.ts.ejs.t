---
to: <%= absPath %>/<%= componentName %>/<%= componentName %>.component.tsx
---
import type { FC } from 'react';
import styles from './<%= componentName %>.module.scss';
import { normalizeClassName } from '@/shared/utils/normalize-class-name';

export type <%= capitalizedComponentName %>Attrs = JSX.IntrinsicElements['div'];

export type Omitted<%= capitalizedComponentName %>Attrs = Omit<<%= capitalizedComponentName %>Attrs, 'ref' | 'children'>;

export type <%= capitalizedComponentName %>Props = {
  //
};

export type <%= capitalizedComponentName %>AttrsAndProps = Omitted<%= capitalizedComponentName %>Attrs & <%= capitalizedComponentName %>Props;

export const <%= capitalizedComponentName %>: FC<<%= capitalizedComponentName %>AttrsAndProps> = ({ ...attrs }) => {
  const className = normalizeClassName(attrs.className, styles.root);

  return (
    <div {...attrs} className={className}>
      I am <%= capitalizedComponentName %> component!
    </div>
  );
};

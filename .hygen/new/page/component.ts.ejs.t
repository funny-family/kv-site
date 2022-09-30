---
to: <%= absPath %>/<%= componentName %>/index.page.tsx
---
import type { NextPage } from 'next';
import styles from './<%= componentName %>.module.scss';

const <%= capitalizedComponentName %>: NextPage = () => {
  const className = styles.root;

  return (
    <div className={className}>
      This is <%= capitalizedComponentName %> page!
    </div>
  );
};

export default <%= capitalizedComponentName %>;

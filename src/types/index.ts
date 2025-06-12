import { type HTMLAttributes } from 'react';

export type BaseProps = HTMLAttributes<HTMLElement>;

export interface ClassName {
  className?: string;
}

export type BaseComponentProps = BaseProps & ClassName;

export interface WithChildren {
  children: React.ReactNode;
}

export type BaseComponentWithChildrenProps = BaseComponentProps & WithChildren; 
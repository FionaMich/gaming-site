import 'react';

declare module 'react' {
  // Add missing React hooks
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const useEffect: (effect: () => (void | (() => void)), deps?: ReadonlyArray<any>) => void;
  export const forwardRef: <T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactElement | null) => ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

  // Add missing event types
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  export interface SyntheticEvent<T = Element, E = Event> {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: T;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: E;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget & T;
    timeStamp: number;
    type: string;
  }

  // Add missing component types
  export type ElementRef<T> = T;
  export type ComponentPropsWithoutRef<T> = any;
  export type ForwardRefExoticComponent<P> = ((props: P) => ReactElement | null) & {
    displayName?: string;
    defaultProps?: Partial<P>;
    propTypes?: WeakValidationMap<P>;
  };
  export type RefAttributes<T> = {
    ref?: Ref<T>;
  };
  export type ReactElement = any;
  export type Ref<T> = ((instance: T | null) => void) | { current: T | null } | null;
  export type PropsWithoutRef<P> = P extends { ref?: infer R } ? Pick<P, Exclude<keyof P, 'ref'>> : P;
  export type WeakValidationMap<T> = {
    [K in keyof T]?: null | undefined;
  };

  // Define JSX namespace
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Add Lucide icon types
declare module 'lucide-react' {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    color?: string;
    className?: string;
  }
} 
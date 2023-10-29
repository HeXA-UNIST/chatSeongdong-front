import * as React from 'react';
import { cn } from '@/libs/utils';

const RoundedDiv = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'flex flex-row justify-between items-center px-3 py-2 rounded-xl border-solid border-2 border-gray-600 bg-gray-200 hover:brightness-50 ',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
);
export { RoundedDiv };
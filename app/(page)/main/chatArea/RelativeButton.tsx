import { Icon } from '@iconify/react';
const RelativeButton = () => {
    return (
        <div className="group fixed bottom-3 right-3 z-10 hidden gap-1 lg:flex">
            <button className='flex items-center justify-center rounded-full bg-gray-50 text-gray-600'>
                <Icon icon="ph:question-bold" className="w-6 h-6 opacity-80" />
            </button>
        </div>
    )
}
export default RelativeButton;
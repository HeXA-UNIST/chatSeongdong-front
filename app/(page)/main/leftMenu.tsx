import { RoundedDiv } from '@/app/components/RoundedDiv';
import { Icon } from '@iconify/react';
const LeftMenu = () => {
    return (
        <div className="flex flex-col justify-between items-center bg-gray-200 h-[100vh] w-[260px] p-4">
            <RoundedDiv className='w-[100%]'>
                <div>
                설정
                </div>
                <Icon icon="uil:setting" className='h-6 w-6 opacity-60'/>
            </RoundedDiv>
            <div className="flex flex-col w-[100%] gap-2">
                <RoundedDiv>
                    <Icon icon="gridicons:recent" className='h-6 w-6 opacity-60'/>
                    최근 이슈
                </RoundedDiv>
                <RoundedDiv>
                    <Icon icon="material-symbols:captive-portal" className='h-6 w-6 opacity-60'/>
                    성동구 누리집
                </RoundedDiv>
            </div>
        </div>
    )
}
export default LeftMenu
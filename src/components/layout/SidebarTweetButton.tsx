import { useRouter } from 'next/navigation';
import { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa';

import useLoginModel from '@/hooks/useLoginModel';

const SidebarTweetButton = () => {
    const router = useRouter();
    const LoginModel = useLoginModel();

    const onClick = useCallback(()=>{
        LoginModel.onOpen();
    },[LoginModel])
    
  return (
    <div onClick={onClick}>
        <div className='
        mt-6 lg:hidden rounded-full h-14 w-14 p-4 
        flex items-center justify-center
        bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
            <FaFeather size={24} color="white"/>
        </div>
        <div className='mt-6 hidden rounded-full px-4 py-2 lg:block
        bg-sky-500 hover:bg-opacity-9   0 transition cursor-pointer'>
            <p className="text-center font-semibold text-white text-xl">Tweet</p>
        </div>
    </div>
  )
}
export default SidebarTweetButton;

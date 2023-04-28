import { IconType } from 'react-icons';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import { BiLogOut } from 'react-icons/bi';
import SidebarTweetButton from './SidebarTweetButton';



const Sidebar:React.FC = () => {
    const items = [
      {
        label: 'Home',
        href: '/',
        icon: BsHouseFill
      },
      {
        label: 'Notification',
        href: '/notification',
      icon: BsBellFill
    },
    {
      label: 'Profile',
      href: '/user/123',
      icon: FaUser,
    }
  ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo/>
          {items.map(item=>(
            <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            />
          ))}
          <SidebarItem 
          label="logout"
          icon={BiLogOut}
          onClick={()=>{}}/>
          <SidebarTweetButton/>
      </div>
    </div>
    )
  }
  
  export default Sidebar

  // <div className='flex flex-row items-center'>
  //   <div className='
  //   relative
  //   rounded-full
  //   h-14
  //   w-14
  //   flex
  //   items-center
  //   justify-center
  //   p-4
  // hover:bg-slate-300
  //   hover:bg-opacity-10
  //   cursor-pointer
  //   lg:hidden'>
  //   </div>
  //   <Icon size={28} color='white'/>
  // </div>
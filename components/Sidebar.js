/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import { HashtagIcon,BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon } from "@heroicons/react/outline";


export default function Sidebar() {
  return (
      <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
          {/**Twitter logo */}
          <div className="hoverEffect p-0 hover:bg-blue-100 xl:p-1">
              <Image
                  width="50"
                  height="50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"></Image>
</div>
          


          {/**menu */}
          <div className="mt-4 mb-2.5 xl:items-start">
              <SidebarMenuItem text="Home" Icon={HomeIcon} active />
              
              <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>

              <SidebarMenuItem text="Notifications" Icon={BellIcon} />

              <SidebarMenuItem text="Messages" Icon={InboxIcon}/>

              <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon}/>

              <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>

              <SidebarMenuItem text="Profile" Icon={UserIcon} />
              
              <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>

          </div>
          

          {/**Button */}
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inine">Tweet</button>

          {/**Mini profile */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
              <img className="h-10 w-10 rounded-full xl:mr-2"
                  src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/274355692_1610787675963523_7702846019003635471_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lUKfuz_9sssAX_9I7aP&_nc_ht=scontent-jnb1-1.xx&oh=00_AfD_TvU2nMJ3C3cU4cmSCd3vuscsivXvTiOKvfMQW0Rlow&oe=64EFA409"
                  alt="User-image" />
              
              <div className="leading-5 hidden xl:inline">
                  <h4 className="font-bold">SaintJean</h4>
                  <p className="text-gray-500">@Saintjhn</p>
              </div>
              <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline"/>
              
          </div>



    </div>
  )
}

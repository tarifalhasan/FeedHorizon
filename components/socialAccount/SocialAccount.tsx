import React from 'react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { Avatar } from '@material-tailwind/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaLinkedinIn, FaPlus } from 'react-icons/fa';
import { TbReload } from 'react-icons/tb';
import { RiDeleteBin5Line } from 'react-icons/ri';
const SocialAccount = () => {
  const ProfileCard = () => (
    <div className="   account_card flex flex-col gap-4 items-center relative py-6">
      <Avatar src="/img/test.png" size="xl" alt="avatar" className="    " />
      <h3 className=" text-xl text-black capitalize font-normal">
        Thomas Dion
      </h3>
      <a href="">
        <FaLinkedinIn size={30} className=" text-[#09A6E9]" />
      </a>
      <h4 className=" text-black text-base">Added Today</h4>
      <div className=" absolute right-0 pr-3 top-2">
        <Menu placement="bottom-start">
          <MenuHandler>
            <button className=" w-8 h-8  rounded-lg bg-[#EDF2F6] grid place-items-center">
              <BiDotsVerticalRounded size={26} />
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex items-center gap-2">
              <TbReload size={26} className=" text-primary-dominant" />
              <span className=" text-sm text-black font-light">
                Refresh account
              </span>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <RiDeleteBin5Line size={26} className=" text-red-400" />
              <span className=" text-sm text-black font-light">
                Remove account
              </span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );

  const AddNewProfile = () => (
    <div className="account_card border-[3px] border-[#E2E8F0] border-dotted !bg-transparent  grid place-items-center">
      <button className="flex items-center flex-col gap-2">
        <FaPlus size={30} />
        <span className=" text-base font-light text-black">Add Account</span>
      </button>
    </div>
  );

  return (
    <div className=" py-12">
      <div>
        <h2 className=" text-3xl text-black">Your Social Accounts</h2>
        <p className=" text-base text-black py-3 font-light">
          All Accounts managed by FeedHorizon
        </p>
      </div>
      <div className=" pt-5  grid lg:grid-cols-4 gap-10  ">
        <ProfileCard />
        <AddNewProfile />
      </div>
    </div>
  );
};

export default SocialAccount;

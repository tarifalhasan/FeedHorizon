'use client';
import React from 'react';
import { CgMathPlus } from 'react-icons/cg';
import { VscHome } from 'react-icons/vsc';
import { TbDeviceAnalytics } from 'react-icons/tb';
import Link from 'next/link';
const PrimeryNavbar = () => {
  const overviewList = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: <VscHome />,
    },
    {
      label: 'Analytics',
      href: 'Analytics',
      icon: <TbDeviceAnalytics />,
    },
  ];
  const contentList = [
    {
      label: 'Compose',
      href: 'Compose',
      icon: <VscHome />,
    },
    {
      label: 'Schedule',
      href: 'Schedule',
      icon: <VscHome />,
    },
    {
      label: 'Posts',
      href: '/Posts',
      icon: <VscHome />,
    },
    {
      label: 'Assets',
      href: 'Assets',
      icon: <VscHome />,
    },
  ];

  const activityList = [
    {
      label: 'Socials',
      href: 'Socials',
      icon: <VscHome />,
    },
    {
      label: 'Settings',
      href: 'Settings',
      icon: <VscHome />,
    },
  ];
  const helpList = [
    {
      label: 'Support',
      href: 'Support',
      icon: <VscHome />,
    },
    {
      label: 'University',
      icon: <VscHome />,
      href: 'unuversity',
    },
  ];

  return (
    <div className=" bg-primary-navbar w-[294px]  flex  fixed left-0 top-0 bottom-0 h-full">
      <div className="w-[59px]  space-y-8 pt-6 flex flex-col items-center border-r-2 border-primary-border h-full">
        <div className="avatar w-10 h-10  rounded-xl bg-primary-complementary grid place-items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="11" fill="#BF360D" />
            <path
              d="M6.546 10.96C6.546 10.3533 6.64867 9.76067 6.854 9.182C7.06867 8.594 7.37667 8.062 7.778 7.586C8.18867 7.10067 8.688 6.718 9.276 6.438C9.864 6.14867 10.5313 6.004 11.278 6.004C12.1647 6.004 12.9253 6.20933 13.56 6.62C14.1947 7.02133 14.666 7.53933 14.974 8.174L13.98 8.818C13.784 8.398 13.532 8.06667 13.224 7.824C12.9253 7.572 12.5987 7.39467 12.244 7.292C11.8987 7.18933 11.558 7.138 11.222 7.138C10.6713 7.138 10.1813 7.25 9.752 7.474C9.332 7.698 8.97733 7.99667 8.688 8.37C8.39867 8.74333 8.17933 9.16333 8.03 9.63C7.89 10.0873 7.82 10.5493 7.82 11.016C7.82 11.5293 7.904 12.024 8.072 12.5C8.24933 12.976 8.492 13.396 8.8 13.76C9.108 14.124 9.472 14.4133 9.892 14.628C10.312 14.8427 10.7693 14.95 11.264 14.95C11.6093 14.95 11.964 14.8893 12.328 14.768C12.692 14.6467 13.0327 14.46 13.35 14.208C13.6673 13.9467 13.9193 13.6107 14.106 13.2L15.156 13.774C14.9507 14.2687 14.6333 14.6887 14.204 15.034C13.7747 15.3793 13.294 15.6407 12.762 15.818C12.2393 15.9953 11.7213 16.084 11.208 16.084C10.5267 16.084 9.90133 15.9393 9.332 15.65C8.76267 15.3513 8.268 14.9593 7.848 14.474C7.43733 13.9793 7.11533 13.4287 6.882 12.822C6.658 12.206 6.546 11.5853 6.546 10.96Z"
              fill="white"
            />
          </svg>
        </div>
        <div className=" w-[50px] h-[2px]  bg-[#D9D9D9]"></div>
        <div>
          <button>
            <CgMathPlus size={30} className=" text-primary-dominant" />
          </button>
        </div>
      </div>
      <div className=" space-y-5 px-4 py-5">
        <div className=" logo flex items-center gap-4">
          <div className=" w-9 h-9 rounded-xl bg-primary-dominant"></div>
          <h2 className=" text-lg text-text-darkMain font-light">
            FeedHorizon
          </h2>
        </div>
        <div className="new_post">
          <button className=" h-11 w-40 bg-primary-dominant rounded-xl flex items-center justify-center gap-2 text-base text-primary-navbar">
            New post <CgMathPlus size={25} className=" text-white" />
          </button>
        </div>
        <div className=" space-y-3">
          <div>
            <h3 className=" text-base text-[#BCBCBC]">OVERVIEW</h3>
            <ul className=" pt-3 space-y-1 ">
              {overviewList.map((item, key) => (
                <Link
                  href={item.href}
                  key={key}
                  className="flex items-center gap-1"
                >
                  {item.icon}
                  <span className=" text-base text-black font-light">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-base text-[#BCBCBC]">CONTENT</h3>
            <ul className=" pt-3 space-y-1 ">
              {contentList.map((item, key) => (
                <Link
                  href={item.href}
                  key={key}
                  className="flex items-center gap-1"
                >
                  {item.icon}
                  <span className=" text-base text-black font-light">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-base text-[#BCBCBC]">ACTIVITY</h3>
            <ul className=" pt-3 space-y-1 ">
              {activityList.map((item, key) => (
                <Link
                  href={item.href}
                  key={key}
                  className="flex items-center gap-1"
                >
                  {item.icon}
                  <span className=" text-base text-black font-light">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-base text-[#BCBCBC]">HELP</h3>
            <ul className=" pt-3 space-y-1 ">
              {helpList.map((item, key) => (
                <Link
                  href={item.href}
                  key={key}
                  className="flex items-center gap-1"
                >
                  {item.icon}
                  <span className=" text-base text-black font-light">
                    {item.label}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeryNavbar;

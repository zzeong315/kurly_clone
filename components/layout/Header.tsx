'use client';
import Link from 'next/link';
import { KurlyLogo } from '@/components/icons/Logo';
import Image from 'next/image';
import { useState } from 'react';
import {
  CartIcon,
  HeartIcon,
  LocationIcon,
  MenuIcon,
  SearchIcon,
} from '@/components/icons/HeaderIcons';
import styles from '../styles/header.module.css';

const userMenuList = [
  {
    key: 'signup',
    name: '회원가입',
    link: '/member/signup',
  },
  {
    key: 'login',
    name: '로그인',
    link: '/member/login',
  },
  {
    key: 'cs',
    name: '고객센터',
    link: 'cs',
  },
];

const Header = () => {
  const [selectedUserMenu, setSelectedUserMenu] = useState<'signup' | 'login' | 'cs'>(
    'signup'
  );
  const [isBeautyKurly, setIsBeautyKurly] = useState(false);

  return (
    <header className={'font-notoSansKR w-[1050px] max-h-[100px]'}>
      <section className={'w-full flex justify-end'}>
        <ul className={'space-x-2 flex h-[35px] items-center'}>
          {userMenuList.map((m) => (
            <li
              key={m.name}
              className={`after:content-['|'] after:ml-2 last:after:content-none text-sm ${m.key === selectedUserMenu ? 'text-point01' : 'text-txt01'}`}
            >
              <Link href={m.link} className={'hover:text-point01'}>
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={'flex items-center justify-between'}>
        <div className={'flex items-center space-x-5'}>
          <Image src={KurlyLogo} width={82} height={42} alt={'logo'} />
          <div className={'flex text-[18px] text-txt02 space-x-[11px]'}>
            <div
              className={`hover:text-point01 ${isBeautyKurly ? '' : 'text-point01'}`}
              onClick={() => setIsBeautyKurly(false)}
            >
              마켓컬리
            </div>
            <div>|</div>
            <div
              className={`hover:text-point01 ${isBeautyKurly ? 'text-point01' : ''}`}
              onClick={() => setIsBeautyKurly(true)}
            >
              뷰티컬리
            </div>
          </div>
        </div>
        <div
          className={
            'flex items-center justify-between w-[400px] h-[48px] rounded-[6px] border border-solid border-point01 pr-2'
          }
        >
          <input
            placeholder={'검색어를 입력해주세요'}
            className={'px-4 py-1 w-full focus:outline-none'}
          />
          <Image src={SearchIcon} alt={'search'} width={30} height={30} />
        </div>

        <div className={'flex space-x-[10px]'}>
          <button className={styles.locationIcon}></button>
          <Image src={LocationIcon} alt={'search'} width={36} height={36} />
          <Image src={HeartIcon} alt={'heart'} width={36} height={36} />
          <Image src={CartIcon} alt={'cart'} width={36} height={36} />
        </div>
      </section>
      {/*category section*/}
      <section className={'flex'}>
        <Image src={MenuIcon} alt={'menu'} width={14} height={16} />
      </section>
    </header>
  );
};

export default Header;

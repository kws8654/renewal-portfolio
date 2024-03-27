import React from 'react';
import Image from 'next/image';
import chrome from '../../public/images/chrome.png';
import discord from '../../public/images/discord.png';
import eclipse from '../../public/images/eclipse.png';
import music from '../../public/images/music.png';
import vsc from '../../public/images/vsc.png';
import docker from '../../public/images/docker.png';
import terminal from '../../public/images/terminal.png';
import notion from '../../public/images/notion.png';
import slack from '../../public/images/slack.png';
import git from '../../public/images/git.png';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { atomOnClickGallery } from '@/reocil/OnClickGallery/atom';
import { atomOnClickChatRoom } from '@/reocil/OnClickChatRoom/atom';

export const DockBar = () => {
  const setOnClickGallery = useSetRecoilState(atomOnClickGallery);
  const setOnClickChatRoom = useSetRecoilState(atomOnClickChatRoom);

  return (
    <>
      <section className='styles-x-center bottom-8 px-2 flex items-center justify-between rounded-2xl bg-gray-400 bg-opacity-60 h-[70px] w-[750px] md:hidden'>
        <Link href='https://www.google.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={chrome} alt={'chrome'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        <Link href='https://www.discord.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            src={discord}
            alt={'discord'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://www.docker.com/' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={docker} alt={'docker'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        <Link
          href='https://visualstudio.microsoft.com'
          passHref
          rel='noopener noreferrer'
          target='_blank'
        >
          <Image
            // onClick={() => setOnClickGallery(true)}
            src={vsc}
            alt={'vsc'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://slack.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            // onClick={() => setOnClickChatRoom(true)}
            src={slack}
            alt={'slack'}
            width={52}
            height={52}
            className='styles-dock-icon mx-2'
          />
        </Link>
        <Link href='https://www.iterm2.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image
            src={terminal}
            alt={'terminal'}
            width={65}
            height={65}
            className='styles-dock-icon'
          />
        </Link>
        <Link href='https://www.notion.com' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={notion} alt={'notion'} width={55} height={55} className='styles-dock-icon' />
        </Link>
        <Link href='https://github.com/kws8654' passHref rel='noopener noreferrer' target='_blank'>
          <Image src={git} alt={'git'} width={65} height={65} className='styles-dock-icon' />
        </Link>
        {/*크롬, 디스코드, 카카오톡, 음악, 갤러리, 터미널*/}
        {/*링크드인, 깃허브, 노션은 외부 링크로 이동*/}
      </section>
      <section className='hidden styles-x-center bottom-8 px-2 items-center justify-between rounded-2xl bg-gray-400 bg-opacity-60 h-[70px] w-[90%] md:flex'>
        <Image src={chrome} alt={'chrome'} width={65} className='styles-dock-icon' />
        <Image src={music} alt={'music'} width={65} className='styles-dock-icon' />
        <Image src={notion} alt={'notion'} width={55} className='styles-dock-icon' />
        {/*<Image src={velog} alt={'velog'} width={50} className='styles-dock-icon' />*/}
      </section>
    </>
  );
};

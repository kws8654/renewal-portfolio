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
import velog from '../../public/images/velog.png';
import git from '../../public/images/git.png';

export const DockBar = () => {
  return (
    <>
      <section className='styles-x-center bottom-8 px-2 flex items-center justify-between rounded-2xl bg-gray-400 bg-opacity-60 h-[70px] w-[750px] md:hidden'>
        <Image src={chrome} alt={'chrome'} width={65} className='styles-dock-icon' />
        <Image src={discord} alt={'discord'} width={65} className='styles-dock-icon' />
        <Image src={eclipse} alt={'eclipse'} width={65} className='styles-dock-icon' />
        <Image src={music} alt={'music'} width={65} className='styles-dock-icon' />
        <Image src={vsc} alt={'vsc'} width={65} className='styles-dock-icon' />
        <Image src={docker} alt={'docker'} width={65} className='styles-dock-icon' />
        <Image src={terminal} alt={'terminal'} width={65} className='styles-dock-icon' />
        <Image src={notion} alt={'notion'} width={55} className='styles-dock-icon' />
        <Image src={velog} alt={'velog'} width={50} className='styles-dock-icon' />
        <Image src={git} alt={'git'} width={65} className='styles-dock-icon' />
      </section>
      <section className='styles-x-center bottom-8 px-2 flex items-center justify-between rounded-2xl bg-gray-400 bg-opacity-60 h-[70px] w-[90%] hidden md:flex'>
        <Image src={chrome} alt={'chrome'} width={65} className='styles-dock-icon' />
        <Image src={music} alt={'music'} width={65} className='styles-dock-icon' />
        <Image src={notion} alt={'notion'} width={55} className='styles-dock-icon' />
        <Image src={velog} alt={'velog'} width={50} className='styles-dock-icon' />
      </section>
    </>
  );
};

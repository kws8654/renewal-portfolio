import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { MacLayout } from '@components/UI/MacLayout';
import Image from 'next/image';
import appleLogo from '../../../public/images/apple-logo.png';
import profileImage from '../../../public/images/profile2.png';

export const HomePage = () => {
  const [sceneNumber, setSceneNumber] = useState(1);
  const audioRef = useRef(null);

  const onClickApple = () => {
    setSceneNumber((prev: number) => prev + 1);
    setTimeout(() => setSceneNumber((prev: number) => prev + 1), 5000);
    audioRef.current.play();
  };

  return (
    <>
      {sceneNumber === 1 && <StartScene onClickApple={onClickApple} />}
      {sceneNumber === 2 && <LoadingScene />}
      {sceneNumber === 3 && <LogInScene />}
      <audio src='./audios/start-sound.mp3' ref={audioRef} />
    </>
  );
};

const StartScene = ({ onClickApple }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(50, 1);
      camera.position.set(0, 0.18, 0.5);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(200, 200);

      const loader = new GLTFLoader();
      scene.background = new THREE.Color('black');
      const light = new THREE.DirectionalLight('#868e96', 10);
      light.position.set(0, 0, 100);
      scene.add(light);

      loader.load('/scene.gltf', (object) => {
        scene.add(object.scene);

        function animate() {
          requestAnimationFrame(animate);
          object.scene.rotation.y -= 0.02;
          renderer.render(scene, camera);
        }
        animate();
      });
    }
  }, [canvasRef]);

  return (
    <section className='w-full h-screen flex flex-col justify-center items-center bg-black'>
      <canvas
        onClick={() => onClickApple()}
        ref={canvasRef}
        className='cursor-pointer transform rotate-180 hover:scale-125 transition'
      ></canvas>
      <p className='text-gray-500 text-center z-30'>
        Please check your volume, <br />
        before click this suspicious apple.
      </p>
    </section>
  );
};

const LoadingScene = () => {
  return (
    <section className='flex justify-center items-center w-full h-screen bg-neutral-900'>
      <div className='flex flex-col justify-center items-center gap-[60px] w-[1400px] h-[800px] border border-gray-500 rounded-lg bg-black overflow-hidden styles-transition'>
        <Image src={appleLogo} alt={'appleLogo'} width={100} />
        <div className='flex items-center w-[450px] h-[10px] border rounded-lg overflow-hidden'>
          <div className='styles-loading-bar'>{/*Loading-Bar*/}</div>
        </div>
      </div>
    </section>
  );
};

const LogInScene = () => {
  const router = useRouter();

  const pushToMain = (event: any) => {
    event.preventDefault();
    router.push('/main');
  };

  return (
    <MacLayout>
      <div className='flex flex-col justify-center items-center h-full'>
        <Image src={profileImage} alt={'profileImage'} width={180} />
        <p className='styles-text-xl text-center text-white'>Guest 19</p>
        <form onSubmit={pushToMain}>
          <input
            type='password'
            className='rounded-2xl mt-4 mb-2 p-1 w-[200px] styles-text-xs'
            placeholder={' 암호 입력'}
          />
        </form>
        <p className='styles-text-sm text-center text-gray-500'>Type any letters</p>
      </div>
    </MacLayout>
  );
};

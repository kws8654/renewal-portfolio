import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { Buttons } from '@components/UI/Buttons';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleDown,
  faDatabase,
  faDesktop,
  faHouseUser,
  faLaptop,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

interface OpenedFolderProps {
  onClickFolder: boolean;
  setOnClickFolder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OpenedFolder = forwardRef((props: OpenedFolderProps, ref: ForwardedRef<any>) => {
  OpenedFolder.displayName = 'OpenedFolder';
  const { onClickFolder, setOnClickFolder } = props;
  const folderCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (folderCanvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: folderCanvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(50, 1);
      camera.position.set(0, 0, 100);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(200, 200);

      const loader = new GLTFLoader();
      scene.background = new THREE.Color('white');
      const light = new THREE.DirectionalLight('#868e96', 10);
      light.position.set(0, 0, 100);
      scene.add(light);

      loader.load('/3d/scene.gltf', (object) => {
        scene.add(object.scene);

        function animate() {
          requestAnimationFrame(animate);
          object.scene.rotation.y -= 0.02;
          renderer.render(scene, camera);
        }
        animate();
      });
    }
  }, [folderCanvasRef]);

  return (
    <div
      ref={ref}
      className={`absolute top-[200px] left-[350px] w-[720px] h-[415px] rounded-lg bg-neutral-100 styles-text-xs overflow-hidden hover:z-40 ${
        onClickFolder ? 'flex' : 'hidden'
      }`}
    >
      <div className='flex flex-col w-1/4 p-2 border-r'>
        <Buttons onClickClose={setOnClickFolder} ref={ref} />
        <div className='flex flex-col gap-[3px] p-2 mt-6'>
          <p className='text-gray-500 font-semibold text-[12px]'>즐겨찾기</p>
          <div className='flex flex-col items-start gap-[3px] px-1'>
            <p>
              <FontAwesomeIcon icon={faPaperPlane} className='mr-1' /> AirDrop
            </p>
            <p>
              <FontAwesomeIcon icon={faDatabase} className='mr-1' /> 응용 프로그램
            </p>
            <p>
              <FontAwesomeIcon icon={faDesktop} className='mr-1' /> 데스크탑
            </p>
            <p>
              <FontAwesomeIcon icon={faCircleDown} className='mr-1' /> 다운로드
            </p>
            <p>
              <FontAwesomeIcon icon={faHouseUser} className='mr-1' /> Wonsub's Portfolio
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-[3px] p-2 mt-2'>
          <p className='text-gray-500 font-semibold text-[12px]'>위치</p>
          <p className='px-1'>
            <FontAwesomeIcon icon={faLaptop} className='mr-1' /> Wonsub's MacBook
          </p>
        </div>
      </div>
      <div className='w-3/4 bg-white'>
        <div className='flex justify-between items-center px-4 h-[10%] border-b'>
          <div className='flex items-center gap-[15px] styles-text-xl'>
            <p className='text-gray-700'>{`<`}</p>
            <p className='text-gray-400'>{`>`}</p>
            <p className='font-semibold styles-text-sm'>Click Here!</p>
          </div>
          <input
            type='text'
            placeholder=' 검색'
            className='w-[140px] rounded-md border bg-gray-100'
          />
        </div>
        <div className='flex flex-col justify-center items-center h-[90%]'>
          <canvas ref={folderCanvasRef} className='cursor-pointer'></canvas>
          <p className='relative bottom-8 styles-text-md'>oops!</p>
        </div>
      </div>
    </div>
  );
});

import { atom } from 'recoil';

const atomOnClickGallery = atom<boolean>({
  key: 'atomOnClickGallery',
  default: false,
});

export { atomOnClickGallery };

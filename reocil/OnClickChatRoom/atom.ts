import { atom } from 'recoil';

const atomOnClickChatRoom = atom<boolean>({
  key: 'atomOnClickChatRoom',
  default: false,
});

export { atomOnClickChatRoom };

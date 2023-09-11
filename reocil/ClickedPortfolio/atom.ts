import { atom } from 'recoil';

const atomClickedPortfolio = atom<string>({
  key: 'atomClickedPortfolio',
  default: null,
});

export { atomClickedPortfolio };

export const mockGames = [
  {
    id: 1,
    title: 'Game 1',
    srcSet:
      'https://static.crowncoinscasino.com/production/assets/games/ruby-play/rp_708-thumbnailLongHr-RhWsw.webp',
    src: 'https://static.crowncoinscasino.com/production/assets/games/ruby-play/rp_708-thumbnailLongHr-RhWsw.webp',
    description: 'This is the first game.',
  },
  {
    id: 2,
    title: 'Game 2',
    srcSet:
      'https://static.crowncoinscasino.com/production/assets/games/hacksaw/rlx.hacksaw.hacksaw.1667-thumbnailLongHr-Ryskb.webp',
    src: 'https://static.crowncoinscasino.com/production/assets/games/hacksaw/rlx.hacksaw.hacksaw.1667-thumbnailLongHr-Ryskb.webp',
    description: 'Hounds of Hell.',
  },
  {
    id: 3,
    title: 'Game 3',
    srcSet:
      'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_MagicalLeprechaun-thumbnailLongHr-KpbEg.webp',
    src: 'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_MagicalLeprechaun-thumbnailLongHr-KpbEg.webp',
    description: 'Magical Leprechaun.',
  },
  {
    id: 4,
    title: 'Game 4',
    srcSet:
      'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_StoryOfGaia-thumbnailLongHr-xwQGj.webp',
    src: 'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_StoryOfGaia-thumbnailLongHr-xwQGj.webp',
    description: 'Story Of Gaia',
  },
];

export const subjectMock = {
  homeData: [...mockGames],
  exclusiveData: [
    ...Array.from({ length: 23 }, (_, index) => ({
      // id完全随机
      id: Math.floor(Math.random() * 1000) + 1,
      title: `Exclusive Game ${index + 1}`,
      srcSet:
        'https://static.crowncoinscasino.com/production/assets/games/ruby-play/rp_708-thumbnailLongHr-RhWsw.webp',
      src: 'https://static.crowncoinscasino.com/production/assets/games/ruby-play/rp_708-thumbnailLongHr-RhWsw.webp',
      description: `This is exclusive game ${index + 1}.`,
    })),
  ],

  earlyBirdData: [
    ...Array.from({ length: 40 }, (_, index) => ({
      id: Math.floor(Math.random() * 1000) + 1,
      title: `Early Bird Game ${index + 1}`,
      srcSet:
        'https://static.crowncoinscasino.com/production/assets/games/hacksaw/rlx.hacksaw.hacksaw.1667-thumbnailLongHr-Ryskb.webp',
      src: 'https://static.crowncoinscasino.com/production/assets/games/hacksaw/rlx.hacksaw.hacksaw.1667-thumbnailLongHr-Ryskb.webp',
      description: `This is early bird game ${index + 1}.`,
    })),
  ],
  topGamesData: [
    ...Array.from({ length: 15 }, (_, index) => ({
      id: Math.floor(Math.random() * 1000) + 1,
      title: `Top Game ${index + 1}`,
      srcSet:
        'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_MagicalLeprechaun-thumbnailLongHr-KpbEg.webp',
      src: 'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_MagicalLeprechaun-thumbnailLongHr-KpbEg.webp',
      description: `This is top game ${index + 1}.`,
    })),
  ],
  slotsData: [
    ...Array.from({ length: 31 }, (_, index) => ({
      id: Math.floor(Math.random() * 1000) + 1,
      title: `Slots Game ${index + 1}`,
      srcSet:
        'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_StoryOfGaia-thumbnailLongHr-xwQGj.webp',
      src: 'https://static.crowncoinscasino.com/production/assets/games/spinomenal/SlotMachine_StoryOfGaia-thumbnailLongHr-xwQGj.webp',
      description: `This is slots game ${index + 1}.`,
    })),
  ],
};

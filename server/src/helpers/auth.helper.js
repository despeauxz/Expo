import randomstring from 'randomstring';

const generateUsername = () => {
  const random = randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  });

  return random;
};

// eslint-disable-next-line import/prefer-default-export
export { generateUsername };

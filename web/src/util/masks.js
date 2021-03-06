import createNumberMask from 'text-mask-addons/dist/createNumberMask';

// eslint-disable-next-line no-useless-escape
const toNum = x => (x.length ? +x.replace(/[^0-9\.]+/g, '') : '');

const MASKS = {
  dollar: {
    mask: createNumberMask({ allowDecimal: true }),
    unmask: toNum
  },
  percent: {
    mask: createNumberMask({ suffix: '%', prefix: '' }),
    unmask: toNum
  }
};

export default MASKS;

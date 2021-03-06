import { makeBoolSettingApi } from './utils';

const {
  SETTING_NAME,
  getValue,
  setValue,
  initializer,
  parser,
  toRawConverter,
} = makeBoolSettingApi('pinned');

export { SETTING_NAME, getValue, setValue, initializer, parser, toRawConverter };

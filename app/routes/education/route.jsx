import { baseMeta } from '~/utils/meta';

export function meta() {
  return baseMeta({
    title: 'Education',
    description: 'My academic journey and achievements.',
  });
}

export { Education as default } from './education';

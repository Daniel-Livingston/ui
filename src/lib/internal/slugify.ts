import slugifyBase from 'slugify';

export const slugify = (str: string) => slugifyBase(str, { lower: true });

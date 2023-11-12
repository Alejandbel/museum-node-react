export const SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
};

export const BOOL_TO_SORT_DIRECTION = {
  [true]: SORT_DIRECTION.ASC,
  [false]: SORT_DIRECTION.DESC,
};

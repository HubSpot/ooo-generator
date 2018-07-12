import omit from 'lodash/fp/omit';
import compose from 'lodash/fp/compose';
import mapProps from 'recompose/mapProps';

export default compose(
  mapProps,
  omit
);

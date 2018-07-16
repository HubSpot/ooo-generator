import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import compose from 'lodash/fp/compose';
import sampleSize from 'lodash/fp/sampleSize';

import { MetadataPropTypes, interpolate } from '../../lib/templating';
import Page from '../page';
import Choice from '../choice';
import { H1, H5 } from '../style/headers';

export default class Choices extends React.Component {
  static propTypes = {
    metadata: MetadataPropTypes,
    templates: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    metadata: {},
    templates: [],
  };

  render() {
    const { metadata, templates } = this.props;
    const [first, second] = compose(
      map(interpolate(metadata)),
      sampleSize(2)
    )(templates);

    return (
      <Page align="center" textAlign="left">
        <H1 color="pinkish">OOO Messages</H1>
        <H5 mb={5}>
          Pick the out of office message that will make your contacts smile.<br />
          Copy it to your clipboard and paste it into your email settings.<br />
          {"Then get out of here. It's vacation time!"}
        </H5>
        <Choice title="Message #1" message={first} />
        <Choice title="Message #2" message={second} />
      </Page>
    );
  }
}

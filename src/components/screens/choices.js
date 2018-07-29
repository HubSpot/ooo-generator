import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import compose from 'lodash/fp/compose';
import sampleSize from 'lodash/fp/sampleSize';

import { MetadataPropTypes, interpolate } from '../../lib/templating';
import { getDocumentHeight, getViewportHeight } from '../../lib/window';
import Page from '../page';
import Choice from '../choice';
import Affordance from '../affordance';
import { H1, H5 } from '../style/headers';

export default class Choices extends React.PureComponent {
  static propTypes = {
    metadata: MetadataPropTypes,
    templates: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    metadata: {},
    templates: [],
  };

  ref = React.createRef();

  state = {
    first: null,
    second: null,
    threshold: null,
  };

  constructor(props) {
    super(props);

    const { metadata, templates } = this.props;
    const [first, second] = compose(
      map(interpolate(metadata)),
      sampleSize(2)
    )(templates);

    this.state = { first, second };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateThreshold.bind(this));
    window.scroll({
      top: getViewportHeight(),
    });
    this.updateThreshold();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateThreshold.bind(this));
  }

  updateThreshold = () => {
    const { current: $container } = this.ref;
    const threshold = $container.offsetHeight;
    this.setState({ threshold });
  };

  render() {
    const { first, second, threshold } = this.state;

    return (
      <Page align="center" textAlign="left" innerRef={this.ref}>
        <H1 color="pinkish">OOO Messages</H1>
        <H5 mb={[2, 4]}>
          Pick the out of office message that will make your contacts smile.<br />
          Copy it to your clipboard and paste it into your email settings.<br />
          {"Then get out of here. It's vacation time!"}
        </H5>
        <Choice title="Message #1" message={first} />
        <Choice title="Message #2" message={second} />
        <Affordance
          color="secondary"
          scrollTo={getDocumentHeight()}
          threshold={threshold}
        />
      </Page>
    );
  }
}

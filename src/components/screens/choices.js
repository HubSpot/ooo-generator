import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import compose from 'lodash/fp/compose';
import filter from 'lodash/fp/filter';
import sampleSize from 'lodash/fp/sampleSize';

import { MetadataPropTypes, interpolate } from '../../lib/templating';
import { getDocumentHeight, getViewportHeight } from '../../lib/window';
import { H1, H5 } from '../style/headers';
import Page from '../page';
import Choice from '../choice';
import Affordance from '../affordance';

export default class Choices extends React.PureComponent {
  static propTypes = {
    metadata: MetadataPropTypes,
    templates: PropTypes.arrayOf(
      PropTypes.shape({
        template: PropTypes.string,
        theme: PropTypes.string,
      })
    ),
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

    const {
      metadata,
      metadata: { theme: selected },
      templates,
    } = this.props;

    const [first, second] = compose(
      map(interpolate(metadata)),
      sampleSize(2),
      filter(({ theme }) => theme === selected)
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
    const { current } = this.ref;
    // eslint-disable-next-line react/no-find-dom-node
    const $container = findDOMNode(current);
    if ($container) {
      const threshold = $container.offsetHeight;
      this.setState({ threshold });
    }
  };

  render() {
    const { first, second, threshold } = this.state;

    return (
      <Page align="center" textAlign="left" ref={this.ref}>
        <H1 color="black">OOO Messages</H1>
        <H5 mb={[2, 4]}>
          Pick the out of office message that will make your contacts smile.
          <br />
          Copy it to your clipboard and paste it into your email settings.
          <br />
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

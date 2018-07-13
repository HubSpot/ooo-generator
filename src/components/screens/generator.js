import React from 'react';
import PropTypes from 'prop-types';

import Form from './form';
import Loading from './loading';
import Choices from './choices';

const extractTemplates = ({ allMarkdownRemark: { edges } }) =>
  edges.map(({ node: { rawMarkdownBody } }) => rawMarkdownBody);

export default class Generator extends React.Component {
  propTypes = {
    data: PropTypes.object,
  };

  state = {
    step: 0,
    formData: {
      firstName: 'Bender',
      lastName: 'Rodriguez',
      startDate: 'January 1, 2018',
      returnDate: 'December 31, 2018',
      destination: 'Omicron Persei 8',
      activity: 'Build my own theme park',
      emergencyContactName: 'Flexo',
      emergencyContactEmail: '000-000-0000',
    }
  };

  constructor(props) {
    super(props);
    const templates = extractTemplates(props.data);

    this.components = [
      {
        component: Form,
        props: {
          onSubmit: this.nextStep,
          handleChange: this.handleChange,
        },
      },
      {
        component: Loading,
        props: { timeout: 2000, onNextStep: this.nextStep },
      },
      { component: Choices, props: { templates, metadata: this.state.formData } },
    ];
  }

  handleChange = e => {
    this.setState({
      field: e.target.value,
    });
  };

  nextStep = () => {
    this.setState(prev => ({
      step: Math.min(this.components.length - 1, prev.step + 1),
    }));
  };

  render() {
    const Component = this.components[this.state.step].component;
    const props = this.components[this.state.step].props;
    return <Component {...props} />;
  }
}

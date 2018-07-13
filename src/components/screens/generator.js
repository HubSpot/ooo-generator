import React from 'react';
import PropTypes from 'prop-types';

import Form from './form';
import Loading from './loading';
import Choices from './choices';

const extractTemplates = ({ allMarkdownRemark: { edges } }) =>
  edges.map(({ node: { rawMarkdownBody } }) => rawMarkdownBody);

export default class Generator extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  state = {
    step: 0,
    formData: {
      firstName: '',
      lastName: '',
      startDate: '',
      returnDate: '',
      destination: '',
      activity: '',
      emergencyContactName: '',
      emergencyContactEmail: '',
    },
  };

  constructor(props) {
    super(props);
    const templates = extractTemplates(props.data);
    const { formData } = this.state;

    this.components = [
      {
        component: Form,
        props: {
          handleChange: this.handleChange,
          onSubmit: this.nextStep,
        },
      },
      {
        component: Loading,
        props: { timeout: 2000, onNextStep: this.nextStep },
      },
      { component: Choices, props: { templates, metadata: formData } },
    ];
  }

  handleChange = ({ target: { value } }, field) => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [field] : value,
      }
    }));
  };

  nextStep = () => {
    this.setState(prev => ({
      step: Math.min(this.components.length - 1, prev.step + 1),
    }));

    this.components[2].props = {
      ...this.components[2].props,
      metadata: this.state.formData
    };
  };

  render() {
    const Component = this.components[this.state.step].component;
    const props = this.components[this.state.step].props;
    return <Component {...props} />;
  }
}

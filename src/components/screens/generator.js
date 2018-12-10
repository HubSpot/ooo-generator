import React from 'react';
import PropTypes from 'prop-types';

import Form from './form';
import Loading from './loading';
import Choices from './choices';

const extractTemplates = ({ allMarkdownRemark: { edges } }) =>
  edges.map(
    ({
      node: {
        rawMarkdownBody: template,
        frontmatter: { theme },
      },
    }) => ({
      template,
      theme,
    })
  );

export default class Generator extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  state = {
    step: 0,
    formData: {
      firstName: '',
      lastName: '',
      leaveDate: '',
      returnDate: '',
      destination: '',
      activity: '',
      emergencyContactName: '',
      emergencyContactEmail: '',
      theme: 'holiday',
    },
  };

  constructor(props) {
    super(props);
    const templates = extractTemplates(props.data);

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
        props: { timeout: 1600, onNextStep: this.nextStep },
      },
      {
        component: Choices,
        props: { templates, onPrevStep: this.prevStep },
      },
    ];
  }

  handleChange = ({ target: { value } }, field) => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
    }));
  };

  prevStep = () => {
    this.setState(prev => ({
      step: prev.step - 1,
    }));
  };

  nextStep = event => {
    if (typeof event === 'object') {
      event.preventDefault();
    }

    this.setState(prev => ({
      step: Math.min(this.components.length - 1, prev.step + 1),
    }));

    this.components[2].props = {
      ...this.components[2].props,
      metadata: this.state.formData,
    };
  };

  render() {
    const { step, formData: metadata } = this.state;
    const { component: Component, props } = this.components[step];

    return <Component {...props} metadata={metadata} />;
  }
}

import PropTypes from 'prop-types';

export const Fields = {
  firstName: 'First Name',
  lastName: 'Last Name',
  startDate: 'Start Date',
  returnDate: 'Return Date',
  destination: 'Destination',
  activity: 'Activity',
  emergencyContactName: 'ER Contact Name',
  emergencyContactEmail: 'ER Contact Email',
};

export const MetadataPropTypes = PropTypes.shape(
  Object.keys(Fields).reduce(
    (propTypes, field) => ({
      ...propTypes,
      [field]: PropTypes.string,
    }),
    {}
  )
);

export const interpolate = (template, metadata) =>
  Object.keys(Fields).reduce(
    (interpolated, field) =>
      Object.prototype.hasOwnProperty.call(metadata, field)
        ? interpolated.replace(
            new RegExp(`\\[${Fields[field]}\\]`, 'g'),
            metadata[field]
          )
        : interpolated,
    template
  );

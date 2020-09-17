import PropTypes from 'prop-types';

export const Fields = {
  firstName: 'First Name',
  lastName: 'Last Name',
  leaveDate: 'Leave Date',
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
const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
};

function escaper(match) {
  return escapeMap[match];
}

const source = `(?:${Object.keys(escapeMap).join('|')})`;
const testRegexp = new RegExp(source);
const replaceRegexp = new RegExp(source, 'g');

function escape(string) {
  string = !string ? '' : `${string}`;
  return testRegexp.test(string)
    ? string.replace(replaceRegexp, escaper)
    : string;
}

export const interpolate = metadata => ({ template }) =>
  Object.keys(Fields).reduce(
    (interpolated, field) =>
      Object.prototype.hasOwnProperty.call(metadata, field)
        ? interpolated.replace(
            new RegExp(`\\[${Fields[field]}\\]`, 'g'),
            escape(metadata[field])
          )
        : interpolated,
    template
  );

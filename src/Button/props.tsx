import PropTypes from "prop-types";

export let defaultProps = {
  submit: false,
  style: {},
  onClick: () => {},
  type: "primary",
  disabled: false
};

export let propTypes = {
  submit: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"] as any),
  onClick: PropTypes.func
};
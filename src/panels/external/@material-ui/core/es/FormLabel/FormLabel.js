import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: 1,
    padding: 0,
    '&$focused': {
      color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
    },
    '&$disabled': {
      color: theme.palette.text.disabled
    },
    '&$error': {
      color: theme.palette.error.main
    }
  },

  /* Styles applied to the root element if `focused={true}`. */
  focused: {},

  /* Styles applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Styles applied to the root element if `error={true}`. */
  error: {},

  /* Styles applied to the root element if `filled={true}`. */
  filled: {},

  /* Styles applied to the root element if `required={true}`. */
  required: {},
  asterisk: {
    '&$error': {
      color: theme.palette.error.main
    }
  }
});

function FormLabel(props, context) {
  const {
    children,
    classes,
    className: classNameProp,
    component: Component,
    disabled: disabledProp,
    error: errorProp,
    filled: filledProp,
    focused: focusedProp,
    required: requiredProp
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "required"]);

  const {
    muiFormControl
  } = context;
  let disabled = disabledProp;
  let error = errorProp;
  let filled = filledProp;
  let focused = focusedProp;
  let required = requiredProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }

    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }

    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }

    if (typeof filled === 'undefined') {
      filled = muiFormControl.filled;
    }
  }

  const className = classNames(classes.root, {
    [classes.disabled]: disabled,
    [classes.error]: error,
    [classes.filled]: filled,
    [classes.focused]: focused,
    [classes.required]: required
  }, classNameProp);
  return React.createElement(Component, _extends({
    className: className
  }, other), children, required && React.createElement("span", {
    className: classNames(classes.asterisk, {
      [classes.error]: error
    })
  }, '\u2009*'));
}

FormLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool
} : {};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  muiFormControl: PropTypes.object
};
export default withStyles(styles, {
  name: 'MuiFormLabel'
})(FormLabel);
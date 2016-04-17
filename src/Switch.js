var React = require("react");
var classNames = require('classnames');
var _values = require('lodash.values');


const SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};


var Switch = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.bool.isRequired,
    size: React.PropTypes.oneOf(_values(SIZES)),
    onClick: React.PropTypes.func
  },

  onClick: function () {
    if (!this.props.onClick) return;
    this.props.onClick(this.props.value, this.props.name);
  },

  render: function() {
    var className = classNames({
      "re-toggle-switch": true,
      "re-toggle-switch--on": this.props.value,
      "re-toggle-switch--xs": this.props.size === SIZES.EXTRA_SMALL,
      "re-toggle-switch--sm": this.props.size === SIZES.SMALL,
      "re-toggle-switch--lg": this.props.size === SIZES.LARGE
    });

    return (
      <span className={className}>
        <input type="checkbox"
               name={this.props.name}
               className="re-toggle-switch__checkbox"
               checked={this.props.value}
               onClick={this.onClick}
               readOnly />
             <span className="re-toggle-switch__switch"></span>
      </span>
    );
  }
});

module.exports = Switch;
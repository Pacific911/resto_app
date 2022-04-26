import React from 'react';
import PropTypes from 'prop-types';

function SidebarItem({ href, icon, title }) {
  return (
    <div>
      <a href={href}>
        <i className="link-icon">{icon}</i>
        {title}
      </a>
    </div>
  );
}

SidebarItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default SidebarItem;

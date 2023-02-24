import React from 'react';
import Menu from '../menu';
import MobileMenu from '../mobile-menu';
import usePortal from 'react-useportal';

const MenuBar = (props) => {
  const { Portal, openPortal, isOpen } = usePortal({
    closeOnOutsideClick: true,
    closeOnEsc: true,
  });

  return (
    <div className={props.className} style={props.style}>
      <Menu onClickToggle={(e) => openPortal(e)} />
      {isOpen && (
        <Portal>
          <MobileMenu isMenuOpened={isOpen} />
        </Portal>
      )}
    </div>
  );
};

export default MenuBar;

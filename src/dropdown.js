import React from "react";



const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div css={{ position: 'relative' }}>
      {target}
      {isOpen ? <Menu className="menu">{children}</Menu> : null}
      {isOpen ? <Blanket className="blanket" onClick={onClose} /> : null}
    </div>

  );

  const Menu = props => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
      <div
      className="menuList"
        css={{
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
          marginTop: 8,
          position: 'absolute',
          zIndex: 2,
        }}
        {...props}
      />
    );
  };
  
  const Blanket = props => (
    <div
      css={{
        width: "10%",
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        position: 'fixed',
        zIndex: 1,
      }}
      {...props}
    />
  );

export default Dropdown;
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
`;

function Header() {
  return (
    <div>
      <Nav>
        <List>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </List>
      </Nav>
    </div>
  );
}

export default Header;

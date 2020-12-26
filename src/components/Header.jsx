/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
`;

export default function Header() {
  return (
    <>
      <Nav>
        <List>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </List>
      </Nav>
    </>
  );
}

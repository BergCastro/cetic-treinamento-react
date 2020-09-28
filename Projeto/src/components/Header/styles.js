import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  padding: 0 8%;
  height: 60px;
  background: #302929;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Links = styled.div`
  a + a {
    margin-left: 16px;
  }

  a {
    color: #fff;
  }
`;

import { NavTopProps } from "@repo/interfaces/interfaces";
import styled from "styled-components";

export const Nav = styled.nav<NavTopProps>(props => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  height: props.height,
  width: '100%',
  backgroundColor: props.backgroundColor || 'white',
}))

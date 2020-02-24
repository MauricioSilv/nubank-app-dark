import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: ${props => props.theme.backgroundCode};
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${props => props.theme.borderRows};
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.borderRows};
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.borderRows};
  margin-left: 20px;
`;

export const SignOutButtom = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => props.theme.borderRows};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 13px;
`;

export const SignOutText = styled.Text`
  color: ${props => props.theme.borderRows};
  font-weight: bold;
  font-size: 13px;
`;

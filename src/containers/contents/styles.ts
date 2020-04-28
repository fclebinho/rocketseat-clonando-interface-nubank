import styled from 'styled-components/native';

export interface BulletItemProps {
  active?: boolean;
}

export const Bullets = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10px;
  width: 100%;
  padding: 25px 0;
`;

export const BulletButton = styled.TouchableWithoutFeedback``;

export const BulletItem = styled.View<BulletItemProps>`
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background: ${(props) => (props.active ? '#fff' : 'rgba( 255,255,255, 0.3)')};
  margin: 0 5px;
`;

import {keyframes, styled} from "goober";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled('div')`
  width: 50px;
  animation: ${rotate} 2s linear infinite;
`;

const Background = styled('div')`
  background: ${({ hideBackground }) =>
    hideBackground ? "transparent" : "rgba (255, 255, 255, 0.7)"};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Spinner({ hideBackground }) {
  return (
    <Background hideBackground>
      <Wrapper>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.427 5.817v5.105C23.463 14.852 10 30.866 10 50c0 22.077 17.923 40 40 40s40-17.923 40-40c0-19.134-13.463-35.148-31.427-39.078V5.817C79.314 9.824 95 28.094 95 50c0 24.836-20.164 45-45 45S5 74.836 5 50C5 28.094 20.686 9.824 41.427 5.817z" />
        </svg>
      </Wrapper>
    </Background>
  );
}

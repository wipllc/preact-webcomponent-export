import { BREAKPOINT } from './style-utils'
import { COLORS } from './style-utils'
import {styled} from "goober";

export const QuizContainer = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  inset: 0;
  font-family: inherit;
  background: ${COLORS.WHITE};

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 20px 0px #0000001a;
    padding: 22px 18px 18px 18px;
    background: var(--harmony-white);
    border-radius: 25px;
  }

  @media ${BREAKPOINT.XS} {
    & > div {
      width: 100%;
      height: 100%;
      border-radius: 0;
      justify-content: unset;
      background: ${COLORS.LIGHTEST_GRAY};
      padding: 18px 0 0 0;
      overflow-y: scroll;
    }
  }
`;

export const Headline = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  & > button {
    border: 0;
    height: 26px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    font-size: 7.5px;
    line-height: 16px;
    color: #262626;
    padding: 6px 10px;
    background: ${COLORS.LIGHTEST_GRAY};

    .closeIcon {
      display: none;
    }

    span {
      margin-right: 4px;
    }
  }

  & button:nth-child(2) {
    margin-right: 8px;
  }

  @media ${BREAKPOINT.XS} {
    top: 17px;
    right: 14px;
    position: fixed;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-bottom: 21px;

    & > button {
      height: 45px;
      color: ${COLORS.DARK_BLACK};
      background: ${COLORS.WHITE};

      .arrowIcon {
        display: none;
      }

      .closeIcon {
        display: flex;
        margin-left: 6px;
      }

      span {
        display: none;
      }
    }
  }
`

export const Title = styled('h4')`
  color: #262626;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 12px;
  text-align: center;

  @media ${BREAKPOINT.XS} {
    line-height: 40px;
    margin: 88px 0 22px 2px;
    padding: 0 18px;
  }
`

export const Description = styled('p')`
  text-align: center;
  line-height: 15px !important;
  font-size: 7.5px !important;
  margin: 0 0 24px 0 !important;
  color: ${COLORS.DARK_BLACK};
  width: 100%;

  @media ${BREAKPOINT.XS} {
    padding: 0 18px;
    margin-left: 2px !important;
  }
`;

export const Assessment = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 7.5px;
  line-height: 15px;
  color: var(--harmony-black);

  & svg {
    margin: 0 28px;
  }

  @media ${BREAKPOINT.XS} {
    display: none;
  }
`

export const Body = styled("div")`
  height: 100%;
  position: relative;

  button {
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    gap: 12px;

    height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &:last-child {
      margin-top: 12px;
    }

    li {
      width: 100%;
      height: 100px;
      color: #00000054;
      line-height: 22px;
      font-size: 7.5px;
      border-radius: 15px;
      display: flex;
      justify-content: flex-start;

      &:hover {
        cursor: pointer;
        background: var(--harmony-orange);
      }

      div {
        padding: 10px;
      }

      button {
        border: 0;
        width: 100%;
        padding: 15px 8px;
        border-radius: 15px;

        &:disabled {
          background: #fcfcfc;
          box-shadow: 1px 2px 8px 0px #0000000d inset;
        }
      }
    }
  }

  @media ${BREAKPOINT.XS} {
    ul {
      height: unset;
      padding: 0 18px;
      grid-template-columns: repeat(1, 1fr);

      li {
        height: 50px;
        align-items: center;
        justify-content: center;

        div {
          padding: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }

  ul:nth-child(1) {
    li {
      color: ${COLORS.MEDIUM_GRAY};
      border: 1px dashed rgba(0, 0, 0, 0.1);
    }

    @media ${BREAKPOINT.XS} {
    }
  }

  ul:nth-child(2) {
    top: 0;
    left: 0;
    right: 0;
    position: absolute;

    button {
      height: 100px;
      background: #262626;
      color: ${COLORS.WHITE};
    }

    @media ${BREAKPOINT.XS} {
      button {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #474747;
        padding: 15px;

        svg {
          margin-right: 8px;
        }
      }
    }
  }

  ul:nth-child(3) {
    button {
      background: ${COLORS.LIGHTEST_GRAY};
      color: ${COLORS.BLACK};
    }

    li:nth-child(n + 4):nth-child(-n + 4) {
      margin: 46px 0 0 0;
    }

    li:nth-child(n + 2):nth-child(-n + 2) {
      margin: 46px 0 0 0;
    }

    @media ${BREAKPOINT.XS} {
      left: 0;
      right: 0;
      bottom: -16px;
      position: fixed;
      padding: 14px 20px 12px 20px;
      border-top: 1px solid #e1e1e1;
      background: ${COLORS.LIGHTEST_GRAY};
      box-shadow: rgb(0 0 0 / 10%) 0px 2px 20px 0px;

      button {
        background: ${COLORS.WHITE};

        &:disabled {
          display: none;
        }
      }

      li {
        height: unset;
        justify-content: flex-start;

        button {
          max-width: 250px;
          box-shadow: 0px 4px 4px 0px #0000000d;
        }
      }

      li:nth-child(n + 4):nth-child(-n + 4),
      li:nth-child(n + 2):nth-child(-n + 2) {
        margin: 0;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const NextButton = styled("button")`
  border: 0;
  width: 100%;
  height: 146px;
  font-size: 7.5px;
  line-height: 15px;
  border-radius: 15px;
  color: ${COLORS.DARK_BLACK};
  background: ${COLORS.LIGHTEST_GRAY};
  position: relative;

  svg {
    margin-left: 8px;
  }

  @media ${BREAKPOINT.XS} {
    height: 140px;
    border-radius: unset;
    background: ${COLORS.WHITE};
    border-top: 1px solid #e1e1e1;
  }
`;

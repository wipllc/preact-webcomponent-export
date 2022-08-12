import { useEffect, useRef } from "preact/hooks";
import { css } from "goober";

export const KitchenSink = ({ name = "world" }) => {
  let wrapper = css`
    background: rgb(245, 245, 245);
    width: 300px;
    height: 400px;
    border-radius: 10px;
  `;

  return (
    <div className={wrapper}>
      <div>Hello {name}!</div>
    </div>
  );
};

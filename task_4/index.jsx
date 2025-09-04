import React, { useState, useCallback, memo } from "react";

type BaseBlockProps = {
  onMouseEnter?: () => void;
  children: React.ReactNode;
};

const BaseBlock = memo(({ onMouseEnter, children }: BaseBlockProps) => {
  const [isActive, setActive] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setActive(true);
    onMouseEnter?.();
  }, [onMouseEnter]);

  return (
    <div onMouseEnter={handleMouseEnter} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
});

type Block1Props = {
  mouseEnterCallbak: () => void;
  imgSrc: string;
  imgAlt?: string;
};

export const Block1 = memo(({ mouseEnterCallbak, imgSrc, imgAlt }: Block1Props) => (
  <BaseBlock onMouseEnter={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt ?? ""} />
  </BaseBlock>
));

type Block2Props = {
  mouseEnterCallbak: () => void;
  content: React.ReactNode | string;
};

export const Block2 = memo(({ mouseEnterCallbak, content }: Block2Props) => (
  <BaseBlock onMouseEnter={mouseEnterCallbak}>
    <p>{content}</p>
  </BaseBlock>
));

type Block3Props = {
  mouseEnterCallbak: () => void;
  userData: { country: string; street: string };
};

export const Block3 = memo(({ mouseEnterCallbak, userData }: Block3Props) => (
  <BaseBlock onMouseEnter={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BaseBlock>
));

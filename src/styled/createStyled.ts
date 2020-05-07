import { createElement, Element } from "@bikeshaving/crank";
import { Tag } from "./tags";
import { css, cx } from "emotion";

export type CreateElementProps = {
  class?: string;
  children?: string | Element | Element[];
};

export type CreateElement = <T>(
  styles: TemplateStringsArray
) => (props: CreateElementProps & Omit<Partial<T>, "children">) => Element;

export type CreateStyled = (tag: Tag) => CreateElement;

const createStyled: CreateStyled = (tag) => (styles) => {
  const elementCss = css(styles);

  return function ({ children, ...props }) {
    return createElement(
      tag,
      { ...props, class: cx(elementCss, props.class) },
      children
    );
  };
};

export default createStyled;

import { createElement, Element } from "@bikeshaving/crank";
import { Tag } from "./tags";
import { css, cx } from "emotion";

export type CreateElementProps = {
  class?: string;
  children?: string | Element | Element[];
};

export type CreateElement = <T>(
  options: TemplateStringsArray | ((props: T) => string)
) => (props: CreateElementProps & Omit<Partial<T>, "children">) => Element;

export type CreateStyled = (tag: Tag) => CreateElement;

const createStyled: CreateStyled = (tag) => (options) => {
  return function ({ children, ...props }) {
    const isFunction = typeof options === "function";
    // @ts-ignore
    const styles = isFunction ? options(props) : options;
    const elementCss = css(styles);

    return createElement(
      tag,
      { ...props, class: cx(elementCss, props.class) },
      children
    );
  };
};

export default createStyled;

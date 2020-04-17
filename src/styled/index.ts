import createStyled, { CreateElement } from "./createStyled";
import { tags, Tag } from "./tags";

const styled: { [key: string]: CreateElement } = {};

tags.forEach((tagName: Tag) => {
  styled[tagName] = createStyled(tagName);
});

export default styled;

<p align="center" style="color: #343a40">
  <a href="https://www.deviantart.com/gessy92">
    <img src="https://cdn.jsdelivr.net/gh/jpbow/cronk@master/kronk.png" alt="Kronk" height="283" width="200">
  </a>
  <h1 align="center">Cronk</h1>
</p>

Standing on the shoulders of [giants](https://emotion.sh), Cronk is a performant and flexible CSS-in-JS library built
for [Crank.js](https://github.com/bikeshaving/crank).

## Quick Start

Get up and running with a single import.

```bash
npm install --save cronk
# or
yarn add cronk
```

```jsx
/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";
import styled from "cronk";

const Greeting = styled.div`
  font-weight: bold;
`;

function HelloWorld() {
  return <Greeting>Hello world!</Greeting>;
}

renderer.render(<HelloWorld />, document.getElementById("app"));
```

## API

As the library is built on top of [Emotion](https://emotion.sh/docs/emotion) it provides the same
API as well as the ability to create styled components.

### Generate Class Names

Equivalent to the `css` [function from Emotion](https://emotion.sh/docs/emotion#css).

The `css` function accepts styles as a template literal, object, or array of objects and returns a class name.
It is the foundation of cronk.

See the example [CodeSandbox](https://codesandbox.io/s/cronk-generate-class-names-crankjs-oxj3n).

```jsx
import { css } from "cronk";

const color = "blue";
const styles = css`
  background-color: lightblue;
  &:hover {
    background-color: ${color};
  }
`;

render(
  <div class={styles}>
    This has a blue background.
  </div>
);
```

### Global Styles

Equivalent to the `injectGlobal` [function from Emotion](https://emotion.sh/docs/emotion#global-styles).

`injectGlobal` injects styles into the global scope and is useful for applications such as css resets or font faces.

See the example [CodeSandbox](https://codesandbox.io/s/cronk-global-styles-crankjs-wbsug).

```jsx
import { injectGlobal } from "cronk";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  .body {
    color: white
  }
`;
```

### Animation Keyframes

Equivalent to the `keyframes` [function from Emotion](https://emotion.sh/docs/emotion#animation-keyframes).

`keyframes` generates a unique animation name that can be used to animate elements with CSS animations.

See the example [CodeSandbox](https://codesandbox.io/s/cronk-animation-keyframes-crankjs-u02vl).

```jsx
import { css, keyframes } from "cronk";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

render(
  <div
    class={css`
      width: 96px;
      height: 96px;
      border-radius: 50%;
      animation: ${bounce} 1s ease infinite;
      transform-origin: center bottom;
    `}
  >
    Bounce
  </div>
);
```

### cx

Equivalent to the [`cx` function from Emotion](https://emotion.sh/docs/emotion#cx), which in turn
is Emotion's equivalent of the [classnames library](https://github.com/JedWatson/classnames).

The key advantage of cx is that it detects cronk generated class names ensuring styles are
overwritten in the correct order. Generated styles are applied from left to right.
Subsequent styles overwrite property values of previous styles.

See the [example CodeSandbox](https://codesandbox.io/s/cronk-cx-crankjs-txe95).

```jsx
import { css, cx } from "cronk";

const cls1 = css`
  font-size: 20px;
  background: green;
`;
const cls2 = css`
  font-size: 20px;
  background: blue;
`;

render(<div class={cx(cls1, cls2)}>Content</div>);
```

### Styled Components

Create components with styles attached to them. Inspired by [styled-components](https://styled-components.com/).

Allows styling of any HTML element, as defined in the tags file.

See the example [CodeSandbox](https://codesandbox.io/s/cronk-styled-components-crankjs-m03pv).

```jsx
import styled from "cronk";

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: dodgerblue;
  border: 2px solid dodgerblue;
  text-align: center;

  &:hover {
    background: aquamarine;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Wrapper() {
  return (
    <Container>
      <Button onclick={() => alert("Clicked!")}>Click me!</Button>
    </Container>
  );
}

render(<Wrapper />);
```

## Examples

- **open a PR and add yours!**

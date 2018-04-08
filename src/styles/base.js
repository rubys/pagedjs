export default `
:root {
  --width: 8.5in;
  --height: 11in;
  --margin-top: 1in;
  --margin-right: 1in;
  --margin-bottom: 1in;
  --margin-left: 1in;
}

.page {
  box-sizing: border-box;
  width: var(--width);
  height: var(--height);
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: [left] var(--margin-left) [center] calc(var(--width) - var(--margin-left) - var(--margin-right)) [right] var(--margin-right);
  grid-template-rows: [header] var(--margin-top) [page] calc(var(--height) - var(--margin-top) - var(--margin-bottom)) [footer] var(--margin-bottom);
}

.page * {
  box-sizing: border-box;
}

.top {
  width: var(--width);
  height: var(--margin-top);
  display: flex;
  grid-column: left / right;
  grid-row: header;
}

.top .top-left-corner {
  width: var(--margin-left);
  height: var(--margin-top);
  flex: none;
}

.top .top-right-corner {
  width: var(--margin-right);
  height: var(--margin-top);
  flex: none;
}

.top > div {
  flex-grow: 1;
  position: relative;
}

.right {
  height: calc(var(--height) - var(--margin-top) - var(--margin-bottom));
  width: var(--margin-right);
  display: flex;
  flex-direction: column;
  right: 0;
  grid-column: right;
  grid-row: page;
}

.right > div {
  flex-grow: 1;
  position: relative;
}

.bottom {
  width: var(--width);
  height: var(--margin-bottom);
  display: flex;
  grid-column: left / right;
  grid-row: footer;
}

.bottom .bottom-left-corner {
  width: var(--margin-left);
  height: var(--margin-bottom);
  flex: none;
}

.bottom .bottom-right-corner {
  width: var(--margin-right);
  height: var(--margin-bottom);
  flex: none;
}

.bottom > div {
  flex-grow: 1;
  position: relative;
}

.left {
  height: calc(var(--height) - var(--margin-top) - var(--margin-bottom));
  width: var(--margin-left);
  display: flex;
  flex-direction: column;
  grid-column: left;
  grid-row: page;
}

.left > div {
  flex-grow: 1;
  position: relative;
}

.page > .area {
  grid-column: center;
  grid-row: page;
  width: 100%;
  height: 100%;
}

.page {
  counter-increment: page;
}


.page .top > div,
.page .bottom > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page .left > div,
.page .right > div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media print {
  body {
    width: var(--width);
    height: var(--height);
    margin: 0;
    padding: 0;
  }
  .pages {
    width: var(--width);
    flex-direction: column;
  }
  .page {
    break-before: always;
  }
}
`;

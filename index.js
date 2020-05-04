const { JSDOM } = require("jsdom");

const main = async () => {
  const dom = await JSDOM.fromURL("https://b.hatena.ne.jp/hotentry/it");
  const nodeList = dom.window.document.querySelectorAll(
    ".entrylist-contents-title a"
  );
  const items = Array.from(nodeList).map((node) => {
    return {
      title: node.title,
      href: node.href,
    };
  });

  console.log(items);
};

main();

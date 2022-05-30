import AnchorLink from "../components/AnchorLink";

export const faqList = [
  {
    q: "新規サイト制作は受け付けていますか？",
    a: (
      <>
        はい。<AnchorLink target="estimate">お見積りフォーム</AnchorLink>
        の備考欄に、新規サイト制作の旨ご記入ください。
      </>
    ),
  },
  {
    q: "WordPress以外のサイトもGatsbyに移行できますか？",
    a: (
      <>
        はい。
        <br />
        もしお分かりになりましたら、
        <AnchorLink target="estimate">お見積りフォーム</AnchorLink>
        の備考欄に、現在使用しているシステムについて記載いただけると助かります。
      </>
    ),
  },
];

import Link from "next/link";
import { Text } from "@/components/language-provider";

export default function NotFound() {
  return (
    <section className="page-intro not-found">
      <Text as="h1" text={{ en: "Page not found.", zh: "找不到這個頁面。" }} />
      <Text
        as="p"
        className="intro-text"
        text={{
          en: "The page you are looking for is unavailable.",
          zh: "你要找的頁面目前不存在。",
        }}
      />
      <Link className="teal-link" href="/">
        <Text text={{ en: "Back to home", zh: "回到首頁" }} />
      </Link>
    </section>
  );
}

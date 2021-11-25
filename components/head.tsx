import { useEffect } from "react";
import { default as NextHead } from "next/head";

type TProps = {
  title?: string;
};

export function Head({ title = "CosmicNvim - Home" }: TProps) {
  useEffect(() => {
    ///@ts-ignore
    (window.heap = window.heap || []),
      (heap.load = function (e, t) {
        (window.heap.appid = e), (window.heap.config = t = t || {});
        var r = document.createElement("script");
        (r.type = "text/javascript"),
          (r.async = !0),
          (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(r, a);
        for (
          var n = function (e) {
              return function () {
                heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              };
            },
            p = [
              "addEventProperties",
              "addUserProperties",
              "clearEventProperties",
              "identify",
              "resetIdentity",
              "removeEventProperty",
              "setEventProperties",
              "track",
              "unsetEventProperty",
            ],
            o = 0;
          o < p.length;
          o++
        )
          heap[p[o]] = n(p[o]);
      });
    ///@ts-ignore
    heap.load(process.env.NEXT_PUBLIC_HEAP_ID);
  }, []);
  return (
    <NextHead>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="description"
        content="CosmicNvim is a lightweight and opinionated Neovim config for web development, specifically designed to provide a 💫 COSMIC programming experience!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

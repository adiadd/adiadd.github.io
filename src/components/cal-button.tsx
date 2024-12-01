"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="adiadd"
      data-cal-config='{"theme":"dark"}'
      className="homepage-link cursor-pointer"
    >
      schedule a chat
    </button>
  );
}

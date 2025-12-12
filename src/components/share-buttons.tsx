"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const iconProps = {
    size: 32,
    round: false,
    className: "rounded-md transition-all duration-200",
    bgStyle: { fill: "transparent" },
    iconFillColor: "currentColor",
  };

  return (
    <div className="flex">
      <TwitterShareButton url={url} title={title} className="rounded-md!">
        <div className="text-neutral-600 hover:text-[#1DA1F2] dark:text-neutral-400">
          <XIcon {...iconProps} />
        </div>
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={title}
        source={url}
        className="rounded-md!"
      >
        <div className="text-neutral-600 hover:text-[#0077B5] dark:text-neutral-400">
          <LinkedinIcon {...iconProps} />
        </div>
      </LinkedinShareButton>

      <FacebookShareButton url={url} hashtag="#blog" className="rounded-md!">
        <div className="text-neutral-600 hover:text-[#1877F2] dark:text-neutral-400">
          <FacebookIcon {...iconProps} />
        </div>
      </FacebookShareButton>
    </div>
  );
}

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl ",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "group-hover:scale-105 object-cover object-center transition rounded-xl w-full h-full",
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}

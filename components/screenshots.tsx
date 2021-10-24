import Image from "next/image";

type TProps = {
  count?: number|null;
};

type ImageProps = {
  [key: string]: {
    label: string;
    width: number;
    height: number;
    alt: string;
  };
};

const images: ImageProps = {
  "/screenshots/hover.png": {
    label: "Hover",
    width: 1200,
    height: 600,
    alt: "",
  },
  "/screenshots/reference.png": {
    label: "Find Reference",
    width: 1200,
    height: 600,
    alt: "",
  },
  "/screenshots/rename.png": {
    label: "Rename",
    width: 800,
    height: 600,
    alt: "",
  },
  "/screenshots/find_files.png": {
    label: "Find Files",
    width: 1200,
    height: 600,
    alt: "",
  },
  "/screenshots/code_action.png": {
    label: "Code Action",
    width: 900,
    height: 600,
    alt: "",
  },
  "/screenshots/terminal.png": {
    label: "Floating Terminal",
    width: 1200,
    height: 600,
    alt: "",
  },
};

export function ScreenshotImages({ count }: TProps) {
  return (
    <>
      <div className="screenshots">
        <p className="description">📷 Screenshots</p>
        {Object.keys(images)
          .map((key: string) => {
            const image = images[key];
            return (
              <div key={key} className="screenshot">
                <p>{image.label}</p>
                <Image
                  src={key}
                  layout="intrinsic"
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </div>
            );
          })
          .filter((image, i) => (typeof count === "number" ? i < count : true))}
      </div>
    </>
  );
}

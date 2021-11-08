import Image from "next/image";

type TProps = {
  count?: number | null;
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
  "/screenshots/dashboard.png": {
    label: "Dashboard",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/normal.png": {
    label: "Normal",
    width: 1000,
    height: 13,
    alt: "",
  },
  "/screenshots/insert.png": {
    label: "Insert",
    width: 1000,
    height: 13,
    alt: "",
  },
  "/screenshots/visual.png": {
    label: "Visual",
    width: 1000,
    height: 9,
    alt: "",
  },
  "/screenshots/replace.png": {
    label: "Replace",
    width: 1000,
    height: 13,
    alt: "",
  },
  "/screenshots/hover.png": {
    label: "Hover",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/references.png": {
    label: "Find Reference",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/rename.png": {
    label: "Rename",
    width: 600,
    height: 210,
    alt: "",
  },
  "/screenshots/rename_notification.png": {
    label: "Rename Notification",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/find_files.png": {
    label: "Find Files",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/code_action.png": {
    label: "Code Action",
    width: 1000,
    height: 600,
    alt: "",
  },
  "/screenshots/terminal.png": {
    label: "Floating Terminal",
    width: 1000,
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
                <div className="image-wrapper">
                  <Image
                    src={key}
                    layout="intrinsic"
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                  />
                </div>
              </div>
            );
          })
          .filter((image, i) => (typeof count === "number" ? i < count : true))}
      </div>
    </>
  );
}

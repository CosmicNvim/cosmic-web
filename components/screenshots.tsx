import Image from "next/image";

type TProps = {
  showAll?: boolean;
};
export function ScreenshotImages({ showAll = false }: TProps) {
  return (
    <div className="screenshots">
      <div className="screenshot">
        {showAll && (
          <p>Hover</p>
        )}
        <Image
          src="/screenshots/hover.png"
          layout="intrinsic"
          width={1200}
          height={600}
          alt=""
        />
      </div>
      {showAll && (
        <>
          <div className="screenshot">
            <p>Find Reference</p>
            <Image
              src="/screenshots/reference.png"
              layout="intrinsic"
              width={1200}
              height={600}
              alt=""
            />
          </div>
          <div className="screenshot">
            <p>Rename Floating Window</p>
            <Image
              src="/screenshots/rename.png"
              layout="intrinsic"
              width={800}
              height={600}
              alt=""
            />
          </div>
          <div className="screenshot">
            <p>Find Files</p>
            <Image
              src="/screenshots/find_files.png"
              layout="intrinsic"
              width={1200}
              height={600}
              alt=""
            />
          </div>
          <div className="screenshot">
            <p>Code Action</p>
            <Image
              src="/screenshots/code_action.png"
              layout="intrinsic"
              width={900}
              height={600}
              alt=""
            />
          </div>
          <div className="screenshot">
            <p>Floating Terminal</p>
            <Image
              src="/screenshots/terminal.png"
              layout="intrinsic"
              width={1200}
              height={600}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
}


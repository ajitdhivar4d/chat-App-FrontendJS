import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
      return <video controls width={"200px"} src={url} preload="none" />;

    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Attachment"
          width={"200px"}
          height={"150px"}
          style={{ objectFit: "contain" }}
        />
      );

    case "audio":
      return <audio controls src={url} preload="none" />;

    default:
      return <FileOpenIcon />;
  }
};

export default RenderAttachment;

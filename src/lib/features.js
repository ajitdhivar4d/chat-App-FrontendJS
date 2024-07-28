import moment from "moment";

const fileFormat = (url) => {
  const fileExt = url.split(".").pop().toLowerCase();

  const fileType = {
    mp4: "video",
    webm: "video",
    ogg: "video",
    png: "image",
    jpg: "image",
    jpeg: "image",
    gif: "image",
    mp3: "audio",
    wav: "audio",
    file: "file",
  };

  return fileType[fileExt] || "file";
};

const getLast7Days = () => {
  const currentDate = moment();

  const last7Days = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");

    last7Days.unshift(dayName);
  }
  return last7Days;
};

//  https://res.cloudinary.com/dckjvqwhg/image/upload/dpr_auto/w_200/v1722012704/ec057f20-923f-4638-9219-77b4d2572ca7.png

///  dpr_auto/w_200
const transformImage = (url = "", width = 100) => {
  if (!url.includes("upload/")) return url;
  return url.replace("upload/", `upload/dpr_auto/w_${width}/`);
};

const getOrSaveFromStorage = ({ key, value, get }) => {
  if (get)
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : null;
  else localStorage.setItem(key, JSON.stringify(value));
};

export { fileFormat, transformImage, getLast7Days, getOrSaveFromStorage };

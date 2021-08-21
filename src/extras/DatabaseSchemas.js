//Schema of the 'Settings' data in the database
export const settingsSchema = {
  name: 'Settings',
  properties: {
    _id: 'string',
    value: 'string',
  },
};

//Schema of the 'Share' data in the database
export const shareSchema = {
  name: 'Share',
  properties: {
    _id: 'string',
    newsLink: 'string',
    newsTitle: 'string',
  },
};

//Schema of the 'Download Image' data in the database
export const downloadImageSchema = {
  name: 'DownloadImage',
  properties: {
    _id: 'string',
    imageLink: 'string',
  },
};

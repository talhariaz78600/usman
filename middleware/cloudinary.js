const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dxtbs0yyv', 
  api_key: '428824366538171', 
  api_secret: 'xi_C0qKr3Z86UoMVwCB04o_syZg' 
});

const img = async (path) => {
  if (path) {
    try {
      const result = await cloudinary.uploader.upload(path, {
        folder: 'urdu-website',
      });

      return result.url;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return null;
};

module.exports = { img };

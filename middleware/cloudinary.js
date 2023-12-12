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

const deleteImageByUrl = async (url) => {
  try {
    // Extract public_id from the URL
    const public_id = url.split('/').slice(-3).join('/').replace(/\..+$/, '');

    // Delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(public_id);

    // Check the result and return a boolean indicating success or failure
    return result.result === 'ok';
  } catch (error) {
    console.error(error);
    return false;
  }
};


module.exports = { img,deleteImageByUrl};

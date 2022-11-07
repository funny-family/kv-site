'use strict';

/**
 * @description Generate pseudo random id;
 *
 * @return {String}
 */
const createPseudoRandomId = () =>
  (Math.random() + 1).toString(36).substring(7);

const googleDiskImageQuerySelector = '.l-u-Ab-zb.ta-gc-np-Nd img';
/**
 * @description Select "img" dom nodes and extract attributes from it.
 *
 * @param {String} querySelector
 *
 * @return {{key: String, src: String}[]}
 */
const getImageAttributes = (querySelector = googleDiskImageQuerySelector) => {
  const elements = Array.from(
    document.querySelectorAll(querySelector),
  );

  const imageAttributes = elements.map(({ src }) => {
    const key = createPseudoRandomId();

    return {
      key,
      src,
    };
  });

  return imageAttributes;
};

/**
 * @description .....
 *
 * @param {{
 *   blobParts: BlobPart[]
 *   blobOptions: BlobPropertyBag
 * }} querySelector
 *
 * @return {String}
 */
const createObjectURLFromBlob = ({ blobParts, blobOptions }) => {
  const fileBlob = new Blob([blobParts], blobOptions);
  const objectURL = URL.createObjectURL(fileBlob);

  return objectURL;
};


/**
 * @description Download file.
 *
 * @param {{ filename: String, objectURL: String }} querySelector
 *
 * @return {void}
 */
const downloadFile = ({ filename, objectURL }) => {
  const link = document.createElement('a');
  link.setAttribute('type', 'hidden');
  link.setAttribute('aria-hidden', 'true');
  link.style.display = 'none';
  link.style.pointerEvents = 'none';
  link.href = objectURL;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// "Common MIME types" - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

// eslint-disable-next-line
const init = () => {
  const imageAttributes = getImageAttributes();
  const imageAttributesAsJsonString = `${JSON.stringify(imageAttributes, null, 2)}\n`;
  const objectURL = createObjectURLFromBlob({
    blobParts: [imageAttributesAsJsonString],
    blobOptions: {
      type: 'application/json',
      endings: 'native',
    },
  });


  downloadFile({
    objectURL,
    filename: 'photos.json',
  });
};

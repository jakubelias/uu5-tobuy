const echoType = shape({
  text: string(10000).isRequired()
});

const createAddressType = shape({
  name: string(100).isRequired(),
  street: string(150).isRequired(),
  city: string(50).isRequired(),
  postalCode: integer(100000).isRequired(),
  country: oneOf(["CZ","SK"])
});

const findAddressType = shape({
  street: string(150).isRequired()
});

const createImageType = shape({
  code: hexa64Code(),
  name: uu5String(255),
  description: uu5String(4000),
  filename: string(255),
  contentType: string(256),
  data: binary().isRequired()
});

const getImageType = shape({
  code: hexa64Code().isRequired(),
  contentDisposition: oneOf(["inline", "attachment"])
});

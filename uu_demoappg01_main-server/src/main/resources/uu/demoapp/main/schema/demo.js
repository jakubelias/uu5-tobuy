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

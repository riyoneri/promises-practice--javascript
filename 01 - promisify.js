function cb(error, data) {
  if (error) {
    return console.log("Error: " + error);
  }
  console.log(data);
}

function fetchProduct(productId, cb) {
  if (productId !== 1) {
    cb(new Error("Product not valid", ""));
  } else {
    cb(undefined, "This is my data");
  }
}

function promisify(fn) {
  async function myFunc(prodId) {
    fn(prodId, cb);
  }

  return myFunc;
}

const fetchProductAsPromise = promisify(fetchProduct);

// Now you got a function `fetchProductAsPromise`
// that returns a promise
fetchProductAsPromise(1)
  .then((data) => console.log(data))
  .catch((error) => {});

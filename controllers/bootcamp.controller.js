// @desc     Create
// @routes   Get /spi/v1/bootcamps/:id
// @access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show specific bootcamp ${req.params.id}`,
    hello: req.hello,
  });
};

// @desc     Create
// @routes   Get /spi/v1/bootcamps/:id
// @access   Public
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamps" });
};

// @desc     update bootcamp
// @routes   Get /spi/v1/bootcamps/:id
// @access   Public
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update specific bootcamp ${req.params.id}` });
};

// @desc     GET all bootcamps
// @routes   Get /spi/v1/bootcamps/:id
// @access   Public
exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc     Delete
// @routes   Delete /spi/v1/bootcamps/:id
// @access   Public
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete specific bootcamp ${req.params.id}` });
};

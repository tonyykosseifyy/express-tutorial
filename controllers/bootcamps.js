const Blog = require( "../models/Test");

Blog.watch().
  on('change', data => console.log(new Date(), data));


exports.getBootcamps = ( req , res , next ) => {
  console.log(req.query);
  const blog = new Blog({title: req.query.title });
  console.log(blog);
  blog.save((err) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(blog);
  })
  //res.status(200).json({ success: true, msg: "Show all bootcamps" , hello : req.hello});
};


exports.getBootcamp = ( req , res , next ) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

exports.createBootcamp = ( req , res , next ) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

exports.updateBootcamp = ( req , res , next ) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = ( req , res , next ) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};

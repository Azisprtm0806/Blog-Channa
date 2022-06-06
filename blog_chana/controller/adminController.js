const Channa = require("../model/Channa");

module.exports = {
  // add data jenis
  createBlog: async (req, res) => {
    const { namaJenis, lokality, perawatan, treatment } = req.body;
    try {
      const jenis = new Channa({
        namaJenis,
        lokality,
        perawatan,
        treatment,
      });
      jenis
        .save()
        .then((result) => {
          res.status(201).json({
            message: "Blog succes di buat",
            data: result,
          });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  },

  // menampilkan semua data
  getAllBlog: async (req, res) => {
    Channa.find()
      .then((result) => {
        res.status(200).json({
          message: "Data Berhasil di panggil",
          data: result,
        });
      })
      .catch((err) => console.log(err));
  },

  // menampilkan data berdasarkan id
  getDataById: async (req, res) => {
    const { id } = req.params;
    Channa.findOne({ _id: id })
      .then((result) => {
        res.status(200).json({
          message: "Data By ID berhasil di panggil",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // edit blog
  editBlog: async (req, res) => {
    const { id } = req.params;
    const { namaJenis, lokality, perawatan, treatment } = req.body;

    Channa.findOne({ _id: id })
      .then((blog) => {
        if (!blog) {
          const err = new Error("Blog tidak di temukan");
          err.errorStatus = 404;
          throw err;
        }

        blog.namaJenis = namaJenis;
        blog.lokality = lokality;
        blog.perawatan = perawatan;
        blog.treatment = treatment;

        return blog.save();
      })
      .then((result) => {
        res.status(202).json({
          message: "Blog berhasil di edit",
          data: result,
        });
      })
      .catch((err) => console.log("error: ", err));
  },

  // delete blog
  deleteBlog: async (req, res) => {
    const { id } = req.params;

    Channa.findByIdAndRemove(id).then((blog) => {
      if (!blog) {
        return res.status(404).send({
          message: `Blog Tidak di temukan${id}`,
        });
      }
      res.status(200).json({
        message: "Sukses menghapus blog",
      });
    });
  },
};

class UploadController {
  create(req, res) {
    res.json(req.file);
  }
}

export default new UploadController();

// Public Packages 
import * as express from 'express';
import * as cors from 'cors';
import * as multer from 'multer';


const app = express();
app.use(cors());
const PORT = process.env.APP_PORT || 8080;

const storage = multer.diskStorage({
  destination: "/usr/share/static",
  filename: (req, file, cb) => {
    console.log(`multer.filename :: File info`, file);
    cb(null, `${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  console.log(`multer.fileFilter :: File info`, file);
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

app.post('/', upload.single('upload'), (req, res) => {
  console.log("file uploaded");
  res.status(200).json({ status: "success" });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

process.addListener('exit', () => { process.exit(0); });
process.addListener('SIGINT', () => { process.exit(0); });
process.addListener('SIGTERM', () => { process.exit(0); });
process.addListener('SIGQUIT', () => { process.exit(0); });
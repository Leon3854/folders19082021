import {upload} from './upload.js'

upload('#file', {
  multi: true, //  позволяет загружать несколько файлов
  accept: ['.png', '.jpg', '.jpeg', '.gif']
})
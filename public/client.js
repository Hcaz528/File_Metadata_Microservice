let fileIcon = document.querySelector('i#file');

changeToIcon(fileIcon, fileIcon.dataset.id);

function changeToIcon(i, file) {
  switch(file) {
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'jpeg2':
      i.classList='fa';
      i.classList+=' fa-file-image-o';
      break;
    case 'pdf':
      i.classList='fa';
      i.classList+=' fa-file-pdf-o';
      break;
    case 'doc':
    case 'docx':
    case 'document':
      i.classList='fa';
      i.classList+=' fa-file-word-o';
      break;
    case 'sheet':
    case 'xslx':
    case 'xsl':
      i.classList='fa';
      i.classList+=' fa-file-excel-o';
      break;
    case 'pptx':
    case 'pptm':
    case 'ppt':
      i.classList='fa';
      i.classList+=' fa-file-powerpoint-o';
      break;
    default:
      i.classList='fa';
      i.classList+=' fa-file-o';
      break;
  }
}

// // Example of file-o fa-file-o
// // fa-file-video-o
// // fa-file-text-o
// // fa-file-audio-o
// // fa-file-code-o
// // fa-file-archive-o
    
// let submitFile = document.querySelector('input[type="file"]');
// let applyimage = '';
// console.log(submitFile);


// // submitFile.addEventListener('input', function() {
// //   console.log(submitFile.value);
// // });

// function checkFile(file) {
//   switch (file.value) {
//     case '':
//       file.innerHTML= file;
//       break;
//     default:
//       file.innerHTML= file;
//       break;
//   }
      
// }

// $("input[type=file]").change(function(){
//   applyimage = this;
//   checkFile(applyimage);
// });

// $("div#try").click(function () {
//     $("input[type=file]").trigger('click');
// });

// let file = `<i class="fa fa-file" aria-hidden="true"></i>`;
// // Example of file-o fa-file-o
// // fa-file-video-o
// // fa-file-image-o
// // fa-file-word-o
// // fa-file-text-o
// // fa-file-audio-o
// // fa-file-powerpoint-o
// // fa-file-pdf-o
// // fa-file-excel-o
// // fa-file-code-o
// // fa-file-archive-o
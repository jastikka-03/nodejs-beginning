// Import the fs module using the require() function:

const fs=require('fs');

// This writes the string 'Hello World!' to the file file.txt.
fs.writeFile('file.txt','Hello World!',function(err){
    if(err) throw err;
    console.log('file written sucessfully');

});

// Read a file using the fs.readFile() method:
fs.readFile('file.txt','utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });//utf method is encode 

// Create a directory using the fs.mkdir() method,This creates a new directory called mydir.
fs.mkdir('mydir', function(err) {
    if (err) throw err;
    console.log('Directory created successfully');
  });

  // Delete a directory using the fs.rmdir() method:,This deletes the directory mydir.
    fs.rmdir('mydir', function(err) {
    if (err) throw err;
    console.log('Directory deleted successfully');
  });

  // Delete a file using the fs.unlink() method:
  fs.unlink('file.txt', function(err) {
    if (err) throw err;
    console.log('File deleted successfully');
  });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const fs = require("fs");
var filename = "";
var content = "";

var createFile = () => {
    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File saved successfully!");
        }
        repeat();
    })
};

var createdirectory=()=>{
fs.mkdir("demo",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Directory created...");
    }
});


};

var removeirectory = () => {
    fs.rmdir("demo",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Directory deleted...");
        }
    });
    
};

var createFileWizard = () => {
    console.log("\nWelcome to the file creation wizard...");
    rl.question("Name of the file :", (ans) => {
        filename = ans + ".txt";

        rl.question("Contents of the file :", (ans) => {
            content = ans;
            createFile();
        });
    });

};
var readFileWizard = () => {
    fs.readFile("test.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
        }
        repeat();
    });

}
var appendToFileWizard = () => {
    fs.appendFile("test.txt", "Appended data", (err) => {
        if (err) {
            console.log(err);
        }
        else {
            fs.readFile("test.txt", (err, input) => {
                console.log(input.toString());
                repeat();
            });
        }
        repeat();

    });

}
var renameFileWizard = () => {
    fs.rename("test.txt", "newfile.txt", (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File renamed successfully...");
        }
        repeat();
    });
}
var replaceFileWizard=()=>{
    fs.writeFile("myreplacefile.txt","This is my text",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Replaced..");
        }
        repeat();
    })
}
var deleteFileWizard = () => {
    fs.unlink('test.txt', (err) => {
        if (err) {
            console.log(err);
        }
        else{
            console.log("File deleted!");
        }
       repeat();
    });
}
var instruction = () => {
    console.log("\nEnter 1 to create directory");
    console.log("Enter 2 to remove directory");
    console.log("Enter 3 to write text file");
    console.log("Enter 4 to read the content of a text file");
    console.log("Enter 5 to delete a file");
    console.log("Enter 6 to append to an existing  file");
    console.log("Enter 7 Update / Replace file with new data");
    console.log("Enter 8 to rename a file");
    console.log("Enter 0 to exit");
}

var start = () => {
    rl.question("Enter Your Choice :", (answer) => {
        if (answer == "1") {
            createdirectory();
        }
        else if (answer == "2") {
            removeirectory();
        }
        else if (answer == "3") {
            createFileWizard();
        }
        else if (answer == "4") {
            readFileWizard();
           
        }
        else if (answer == "5") {
           deleteFileWizard();
        }
        else if (answer == "6") {
            appendToFileWizard();
        }
        else if (answer == "7") {
            replaceFileWizard();
        }
    
        else if(answer=="8"){
          renameFileWizard();
        }
        else if(answer=="0"){
            rl.close();
        }
        else {
            console.log("Wrong choice");
            start();
        }
    });
}

var repeat = () => {
    instruction();
    start();
}
console.log("Welcome to  File System");
repeat();
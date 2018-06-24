var myDocument = app.documents.add();

var newRGBColor = new RGBColor();
    newRGBColor.red = 255;
    newRGBColor.green = 255;
    newRGBColor.blue = 255;

var newStrokeColor = new RGBColor();
    newStrokeColor.red = 0;
    newStrokeColor.green = 0;
    newStrokeColor.blue = 0;


//Create a new text frame and assign it to the variable "myTextFrame"


var myTextFrame;

for(var i=0;i<10;i++){
    myTextFrame = myDocument.textFrames.add();
    myTextFrame.contents = i;
    // Set the contents and position of the text frame
    myTextFrame.position = [0,myDocument.height];
    myTextFrame.width = myDocument.width;
    myTextFrame.height = myDocument.height;
    myTextFrame.opacity = 50;
    //myTextFrame.createOutline();
    textArtRange = myTextFrame.textRange;
    textArtRange.characterAttributes.fillColor = newRGBColor; 
    textArtRange.characterAttributes.stroked = true;  
    textArtRange.characterAttributes.strokeColor = newStrokeColor;  
    textArtRange.characterAttributes.strokeWidth = 10;  
    textArtRange.characterAttributes.fillOverprint = true; 
    textArtRange.characterAttributes.strokeOverprint = true;  
}




//make outlines

//merge numbers

//create color scheme

//fill random spaces


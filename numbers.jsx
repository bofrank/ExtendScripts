//This overlays the numbers 0 through 9 

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

    //style characters
    character = myTextFrame.textRange.characterAttributes;
    character.fillColor = newRGBColor; 
    character.stroked = true; 
    character.strokeColor = newStrokeColor;  
    character.strokeWidth = 10;  
    character.fillOverprint = true; 
    character.strokeOverprint = true;  
    //textArtRange.textFont = textFonts.getByName("Metric-Semibold");
}

//merge layers

//create color scheme

//fill random spaces

//export image

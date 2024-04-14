/**
 * 
 */
export class Editor{

    /** */
    getHeading(){}

    /** */
    textType(input:string){}

    /** */
    getTextFromEditor():string{
        return "";
    }

    undoLastAction(){}

    redoLastUndo(){}

    setHeadingStyle(style:HeadingStyles){}

        //HeadingStyles.

    alignRight(){}
    alignLeft(){}
    getCurrentalignment(){}
    }




export enum HeadingStyles{
    Heading1,
    Heading2,
    Heading3
}
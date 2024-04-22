import { isErrored } from "stream";

interface IHomePage {
    dosearch: ()=>{}
    doLogo: () =>{}
}
class HomePageV1 implements ILogo, IDisplay, ISearch
{
    
    displayFish(arg:string){}



    

    
    // V1
    // logo - Image
           //  V2  Video
           //  QR Code
    // search
    // petdisplay
}


interface ILogo{}
interface ISearch{}
interface IDisplay{}

class HomePageV2 extends HomePageV1 implements ILogo{}

class DependencyComplicated{

    constructor(){
    // network = new NetworkClsss();
    // fileSystem = new FileSystem();
    // specialDecice = new SpecialDecice();

    }

    
}

class DependencySimplified{

    constructor(network:any, filesys:any, spec:any){
    // network = new NetworkClsss();
    // fileSystem = new FileSystem();
    // specialDecice = new SpecialDecice();

    }

    
}

const comp = new DependencyComplicated()

const dummynw = 0;
const fls = 0;
const special = 100
const myclas = new DependencySimplified(dummynw, fls, special)

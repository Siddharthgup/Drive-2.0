interface Button {

    btnClass?:string;
    title:string;
    onClick?:  () =>void;
}


interface Progress{
    progress:number;
}

interface AuthInterface{
    clientId:string;
    clientSecret:string;
}

interface ArrayType{
    map:Function;


}

interface FolderStructure{
    parentId:string ;
}
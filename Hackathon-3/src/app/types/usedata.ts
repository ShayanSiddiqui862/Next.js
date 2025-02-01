export default interface User{
    firstname:string;
    lastname:string;
    email:string;
    pass:string;
    Sign: () => void;
    type:string;
}
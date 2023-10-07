export interface IServer{
    req: any;
    res: any;
    err: string;
    data: any;
}

export interface IFormData{
    Email: string;
    Password: string;
}
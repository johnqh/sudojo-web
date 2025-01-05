import { Nullable } from 'Sudojo';
import { ILogin } from '../types/protocols';

class Login implements ILogin {
    loggedIn(callback: (p0: Nullable<string>, p1: boolean, p2: boolean, p3: Nullable<string>, p4: Nullable<string>, p5: Nullable<string>) => void): void {
        // throw new Error('Method not implemented.');
    }
    login(callback: (p0: Nullable<string>, p1: boolean, p2: boolean, p3: Nullable<string>, p4: Nullable<string>, p5: Nullable<string>) => void): void {
        // throw new Error('Method not implemented.');
    }
    logout(callback: (p0: Nullable<string>, p1: boolean, p2: boolean, p3: Nullable<string>, p4: Nullable<string>, p5: Nullable<string>) => void): void {
        // throw new Error('Method not implemented.');
    }
}

export default Login;

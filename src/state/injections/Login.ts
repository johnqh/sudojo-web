import { Nullable } from 'Sudojo';
import { LoginProtocol } from '../../types/protocols';

class Login implements LoginProtocol {
    login(
        callback: (
            p0: Nullable<string>,
            p1: boolean,
            p2: boolean,
            p3: Nullable<string>
        ) => void
    ): void {
        throw new Error('Method not implemented.');
    }
    logout(
        callback: (
            p0: Nullable<string>,
            p1: boolean,
            p2: boolean,
            p3: Nullable<string>
        ) => void
    ): void {
        throw new Error('Method not implemented.');
    }
}

export default Login;

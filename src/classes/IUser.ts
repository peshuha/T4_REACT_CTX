export interface IUser {
    SetLogin(user: string): void,
    SetPassword(password: string): void,
    IsAuth(): boolean,
    UserName(): string,
    Authorize(): void
}
export class LoginDetails {
    email: string;
    password: string;

    stringify(): any {

        let value = [
            {
                "email": this.email,
                "password": this.password
            }
        ];
        // return JSON.stringify(value);
        return value;
    }
}

export class SignUpDetails {
    fullName: string;
    email: string;
    password: string;

    stringify(): any{
        let value = [
            {
                "fullName": this.fullName,
                "email": this.email,
                "password": this.password
            }
        ];

        // return JSON.stringify(value);
        return value;
    }
}

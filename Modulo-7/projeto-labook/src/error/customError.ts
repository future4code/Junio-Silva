export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class InvalidName extends CustomError {
    constructor() {
        super(400, "Nome preenchido incorretamente")
    }
}

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "E-mail preenchido incorretamente")
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Password preenchido incorretamente")
    }
}
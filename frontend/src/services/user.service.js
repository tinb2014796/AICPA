import createApiClient from "./api.service";
class UserService {
    constructor(baseUrl = "/api/user") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) { //POST O CHO NAY 
        return (await this.api.post("/signup", data)).data;
    }
    async login(data) { //POST O CHO NAY 
        return (await this.api.post("/login", data)).data;
    }
}
export default new UserService();
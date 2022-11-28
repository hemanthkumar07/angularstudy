create service
   * ng g s [service_name]
app.module.ts
   * providers: [AuthService],
app.module.ts
    import http clint module
    *import { HttpClientModule} from '@angular/common/http'
    *imports: [
        HttpClientModule
    ],
authservice.ts
    *import http clint
    *import { HttpClient } from '@angular/common/http'
    injuct httpclint to constructor
    *export class AuthService {

    constructor( private http:HttpClient) { }
    }
Created a fake backend server-JSON Server
Installation-sudo npm install -g json-server
Json running command-json-server --watch db.json

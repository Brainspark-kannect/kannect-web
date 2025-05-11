import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) {}

    private secretKey: string = environment?.PASSWORD_ENCRYPTION_KEY;

    // Convert key to WordArray
    private getKey(): CryptoJS.lib.WordArray {
        return CryptoJS.enc.Utf8.parse(this.secretKey);
    }

    // Encrypt password
    encryptPassword(password: string): string {
        return CryptoJS.AES.encrypt(password, this.getKey(), {
            mode: CryptoJS.mode.ECB, // Use ECB mode or update to CBC with IV
            padding: CryptoJS.pad.Pkcs7,
        }).toString();
    }

    doLogin(userName: string, password: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const encryptedPassword = this.encryptPassword(password);
        const body = { userName: userName, password: encryptedPassword };
        // return this.http.post(
        //     this.configSvc?.getConfig(CONFIG_CONSTANTS?.BASE_URL) + '/auth/login',
        //     body,
        //     {
        //         headers,
        //     }
        // );

        return this.http.post(environment?.BACKEND_CONFIG?.BASE_URL + '/auth/login', body, {
            headers,
        });
    }
}

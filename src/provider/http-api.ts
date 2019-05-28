import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpClientProvider {

    // apiUrl = "http://staging.php-dev.in:8844/trainingapp/api/";
    // apiUrl = "http://10.0.29.42/TrainingApp/api/";
    apiUrl = "http://104.236.243.12:5000/";
    // apiUrl = "http://10.0.29.147/TrainingApp/api/";

    AT="";

    constructor(public http: HttpClient) {
        console.log('Hello HttpClientProvider Provider');
    }



    private headers =  new HttpHeaders().set('Content-Type','application/json');
    private headers_1 = new HttpHeaders().set('Content-Type','multipart/form-data');
    private headers_2 = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    private headers_3 = new HttpHeaders().set('access_token',"5a6087b7a3407");


    public headers10:any = new Headers({ 'Content-Type': 'application/json', 'access_token':"5a6087b7a3407"}); // ... Set content type to JSON


    getProfile(){
        console.log("in getProfile");

        return new Promise(resolve => {
            // this.http.get("https://api.myjson.com/bins/1118ss").subscribe(data => {
                this.http.get("http://104.236.243.12:5000/allEvents").subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
}

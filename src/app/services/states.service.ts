import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()

export class CommonService {

    profileList: boolean;

    data: Observable<any>;

    constructor(
        private afs: AngularFirestore
        ) {}

    // getData() {
    //     return this.afs.collection("contactData").valueChanges();
    // }

    createOrder(data) {
        return this.afs.collection("contactData").add(data);
    }

}
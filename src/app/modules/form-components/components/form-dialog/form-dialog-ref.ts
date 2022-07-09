import { Subject, Observable } from 'rxjs';

export class FormDialogRef {

    private readonly _afterClosed = new Subject<any>();
    afterClosed: Observable<any> = this._afterClosed.asObservable();

    constructor() { }

    public close(result?: any) {
        this._afterClosed.next(result);
    }
}
export class DataService {

    private data: any[];

    public setData(data: any[]) {
        this.data = data;
    }

    public getData() {
        return this.data || [];
    }

    public hasData() {
        return this.data && this.data.length;
    }

}

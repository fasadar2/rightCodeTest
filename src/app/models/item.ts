export class Item {
  id:string
  name: string;
  adress: string;
  comment: string;
  mark: number;
  constructor(id:string,name:string,adress:string,comment:string,mark:number) {
    this.id = id
    this.name = name;
    this.adress = adress;
    this.comment = comment
    this.mark = mark;
  }

}

export class Item {
  id:number
  name: string;
  adress: string;
  comment: string;
  mark: number;

  constructor(id:number,name:string,adress:string,comment:string,mark:number) {
    this.id = id
    this.name = name;
    this.adress = adress;
    this.comment = comment
    this.mark = mark;
  }

}

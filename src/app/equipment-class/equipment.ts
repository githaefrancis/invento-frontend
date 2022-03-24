export class Equipment {

  constructor(public equipment_name:string,
    public equipment_serial_number:string,
    public equipment_code:number,
    public equipment_model:string,
    public equipment_type:string,
    public category:number,
    public equipment_cost:number,
    public available:boolean,
    public notes:string,
    public damaged:boolean,
    public equipment_image:string
     ){}
}

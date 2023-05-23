import * as TypeORM from 'typeorm'



@TypeORM.Entity()

class Orders extends TypeORM.BaseEntity{
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false })
    fullname : string 

    @TypeORM.Column({nullable : false })
    phone : string 

    @TypeORM.Column()
    email : string 

    @TypeORM.Column({nullable : false })
    address : string 

    @TypeORM.Column({nullable : false })
    list : string 

    @TypeORM.Column({default : false, nullable : false })
    reviewd : boolean 

}

export default Orders
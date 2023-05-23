import * as TypeORM from 'typeorm'
import Products from './products.entity'


//create enum 

export enum UserRole {
    Inventory = 'inv',
    OrderManegment= "ord",
    Admin = 'adm'
}


@TypeORM.Entity()
class Users extends TypeORM.BaseEntity {
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false, unique: true }) 
    username : string 

    @TypeORM.Column({nullable : false, unique: true })
    email : string

    @TypeORM.Column({nullable : false})
    password : string

    @TypeORM.Column({nullable : false})
    role : UserRole

    @TypeORM.Column({nullable : true})
    picture: string 

    @TypeORM.Column({nullable : true})
    phone: string

    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date


    @TypeORM.OneToMany(() => Products, product => product.addedby)
    products : Products[]

}

export default Users
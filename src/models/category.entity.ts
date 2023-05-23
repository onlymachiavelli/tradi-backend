import * as TypeORM from 'typeorm'
import Products from './products.entity'

@TypeORM.Entity()
class Category extends TypeORM.BaseEntity {
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false, unique: true }) 
    title : string 

    @TypeORM.Column()
    description: string 

    @TypeORM.Column({nullable : true, })
    logo : string 



    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date


    @TypeORM.OneToMany(() => Products, product => product.category)
    products : Products[]

}


export default Category
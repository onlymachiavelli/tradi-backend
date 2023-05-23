import * as TypeORM from 'typeorm'
import Users from './users.entity'
import Category from './category.entity'

@TypeORM.Entity()

class Products extends TypeORM.BaseEntity {
    @TypeORM.PrimaryGeneratedColumn()
    id : number 

    @TypeORM.Column({nullable : false, unique: true }) 
    title : string 

    @TypeORM.Column()
    description: string 

    @TypeORM.Column({nullable : true, })
    image : string 

    @TypeORM.Column()
    price : number 



    @TypeORM.Column()
    created_at : Date

    @TypeORM.Column()
    updated_at : Date

    @TypeORM.ManyToOne(() => Users, user => user.products)
    addedby : Users

    @TypeORM.ManyToOne(() => Category, category => category.products)
    category : Category
}

export default Products
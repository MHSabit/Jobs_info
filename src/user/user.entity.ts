import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { Profile } from "../profile/profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        unique: true,
        nullable: false,
    })
    email: String;
    
    
    @Column()
    password: String;

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // Profile?: Profile;

    @Column()
    phone: String;



    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @DeleteDateColumn()
    deletedAt: Date;
}
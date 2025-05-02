import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import { Profile } from "../profile/profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;

    // @OneToOne(() => Profile)
    // @JoinColumn()
    // Profile?: Profile;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @DeleteDateColumn()
    deletedAt: Date;
}